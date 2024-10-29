const API_KEY = "17f1ceadcf3767a35e55dd6204800668";
const ellist = document.querySelector('.list')
import React from 'react'
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then((response) => response.json())
.then((data) => render(data.results, ellist));

function render(array, node) {
    node.innerHTML = "";
    array.forEach((item) => {
      node.innerHTML += `<li className="list__item"><img className="item__img" width="300" src="https://image.tmdb.org/t/p/original${item.poster_path}
      alt="${item.overview}">
      <h3 className="item__title">${item.name}</h3></li>`;
    });
    }
function elBtns1  ()  {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => render(data.results, ellist));
  };
function Popular() {
  return (
    <button onClick={elBtns1} className="btn">Popular</button>
  )
}

export default Popular
