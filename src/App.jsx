import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import MovieCard from './components/movieCard/MovieCard';
import logo from './assets/cinestar.png';
import lupa from './assets/search.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const mudaTema = () => {
    const tema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    document.documentElement.setAttribute("data-bs-theme", tema);
  };
  mudaTema();


  // Listen for changes in the color scheme
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", mudaTema);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = 'e4d577fa';
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies('Mamma Mia!');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search);
    }
  };

  return (
    <div id="app">
      <img className="logo" src={logo} alt="logo" />

      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes"
        />
        <img onClick={() => searchMovies(search)} src={lupa} alt="buscar" />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😒 Filme não encontrado 😒</h2>
      )}

      <Footer devName="CodeGirls" devLink="https://amzn.to/4idJ45d" />
    </div>
  );
};

export default App;