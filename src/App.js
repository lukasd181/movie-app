import React, {useEffect, useState} from 'react'
import "./App.css";
import MovieList from './components/movieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation'
import Pagi from './components/pagination'
const API_KEY = process.env.REACT_APP_APIKEY;

export default function App() {
  let [movieList, setMovieList] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPosts, setTotalPosts] = useState(null);
  let [keyword, setKeyword] = useState("")
  const getMovieLatest = async() => {
    setLoading(true);
    let url=`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentPage}&query=${keyword}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    console.log("keyword",keyword);
    setTotalPosts(data.total_results)
    setMovieList(data.results);
    setLoading(false);
  }

 

  const searchByKeyword = async(keyword) => {
    setCurrentPage(1);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}&page=${currentPage}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setKeyword(keyword);
    setTotalPosts(data.total_results);
    setMovieList(data.results);
  }

  const changePage = async(pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentPage}&query=${keyword}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(keyword);
    setMovieList(data.results);
    setLoading(false);
  }
  useEffect(() => {
    getMovieLatest();
  },[])

  return (
    
    <div>
      <Navigation searchByKeyword = {searchByKeyword}/>
      <MovieList list={movieList}/>
      <Pagi totalPosts={totalPosts} changePage={changePage}/>
    </div>
  )
}
