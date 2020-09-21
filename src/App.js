import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/movieList";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navigation";
import Pagination from "react-js-pagination";
import FilterArea from "./components/filterArea";

import Pagi from "./components/pagination";

const API_KEY = process.env.REACT_APP_APIKEY;

export default function App() {
  let [originalList, setOriginalList] = useState([]);
  let [movieList, setMovieList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPosts, setTotalPosts] = useState(null);
  let [keyword, setKeyword] = useState("");
  let [inputRange, setInputRange] = useState({ min: 0, max: 10 });
  let [genreList, setGenreList] = useState([]);
  const getMovieLatest = async (clickedPage) => {
    setLoading(true);
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentPage}&query=${keyword}&page=${clickedPage}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    console.log("keyword", keyword);
    setTotalPosts(data.total_results);
    setOriginalList([...data.results]);
    setMovieList([...data.results]);
    setLoading(false);
  };

  const getGenreList = async () => {
    let url =`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    let response = await fetch(url);
    let data = await response.json();
    console.log("genre",data);
    setGenreList(data.genres);

  };
  const searchByKeyword = async (keyword) => {
    setCurrentPage(1);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&page=${currentPage}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setKeyword(keyword);
    setTotalPosts(data.total_results);
    setMovieList(data.results);
  };

  

  const filterByRange = (range) => {
    console.log("range", range);
    let filteredList = originalList.filter(
      (item) => item.vote_average >= range.min && item.vote_average <= range.max
    );
    setMovieList(filteredList);
  };

  useEffect(() => {
    getMovieLatest(1);
    getGenreList();
  }, []);
  if (!movieList) return <div>geehehe</div>;
  return (
    <div>
      <Navigation searchByKeyword={searchByKeyword} />
      <FilterArea
        inputRange={inputRange}
        setInputRange={setInputRange}
        filterByRange={filterByRange}
      />
      <MovieList list={movieList} genreList={genreList}/>

      <Pagination
        activePage={currentPage}
        itemsCountPerPage={20}
        totalItemsCount={totalPosts}
        pageRangeDisplayed={5}
        onChange={(clickedPage) => {
          setCurrentPage(clickedPage);
          getMovieLatest(clickedPage);
        }}
        itemClass="page-item"
        linkClass="page-link"
      />
      {/* <Pagi totalPosts={totalPosts} changePage={changePage} /> */}
    </div>
  );
}
