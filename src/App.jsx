import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import MovieCard from './components/movieCard/MovieCard';
import logo from './assets/d.png';
import lupa from './assets/search.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const App = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const apiKey = 'e4d577fa';
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies('Mamma Mia!');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}&`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === 'Enter' && searchMovies(search);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.className = isDarkMode ? 'light' : 'dark';
  };

  return (
    <div id="app">
      <img className="logo" src={logo} alt="logo" />
      
      {/* Ícone de alternância de tema dentro do botão específico */}
      <div className="theme-toggle">
        <span onClick={toggleTheme}>{isDarkMode ? '🌙' : '☀️'}</span>
      </div>

      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes"
        />
        <img onClick={() => searchMovies(search)} src={lupa} alt="buscar" />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😒 Filme não encontrado 😒</h2>
      )}
      <Footer
       devName={'CodeGirls'} 
       devLink={'https://amzn.to/4idJ45d'} 
/>
    </div>
  );
};

export default App;