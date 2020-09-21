import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const Pagi = ({totalPosts, changePage}) => {
    const POST_PER_PAGE = 20;
    const pageNumbers = [];
    for (let i = 1; i<= Math.ceil(totalPosts/POST_PER_PAGE); i++){
        pageNumbers.push(i);
    }
  return (
    <div>
      <ul className="pagination">
          {pageNumbers.map(page => {
              return <li id={page} className="page-link" onClick={() => changePage(page)}>
                  {page}
              </li>
          })}
      </ul>
    </div>
  );
};

export default Pagi;
