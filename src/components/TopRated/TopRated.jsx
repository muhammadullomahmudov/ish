const API_KEY = "17f1ceadcf3767a35e55dd6204800668";
const ellist = document.querySelector('.list')
import React from 'react'
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then((response) => response.json())
.then((data) => render(data.results, ellist));



function elBtns4  ()  {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => render(data.results, ellist));
  };
function TopRated() {
  return (
<>
<button onClick={elBtns4} className="btn">Top Rated</button>
</>
  )
}

export default TopRated
