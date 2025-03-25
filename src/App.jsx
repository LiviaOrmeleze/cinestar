import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";
import logo from "./assets/logocinestar.png";
import lupa from "./assets/search.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const App = () => {
  <img src="" alt="" />;

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  // const apiKey = import.meta.env.VITE_OMDB_API_KEY
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimentando com dados para não ficar nulo com useEffect
  useEffect(() => {
    searchMovies("Barbie");
  }, []);

  //criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}&`);
    const data = await response.json();

    //Alimentando o movies
    setMovies(data.Search);
  };



  return (
    <div id="app">
      <img
        className="logo object-fit-cover"
        width={"400px"}
        height={"150px"}
        src={logo}
        alt=""
      />


      

      <h2 className="empty">Top mais assistidos</h2>

      {movies?.length > 0 ? (
        <div className="overflow-x-auto overflow-y-hidden d-flex flex-nowrap g-4 p-4 w-100 removeScroll">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😒 Filme não encontrado 😒</h2>
      )}

      <h2 className="empty">Romances</h2>

      {movies?.length > 0 ? (
        <div className="overflow-x-auto overflow-y-hidden d-flex flex-nowrap g-4 p-4 w-100 removeScroll">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😒 Filme não encontrado 😒</h2>
      )}

      <h2 className="empty">Ação</h2>

      {movies?.length > 0 ? (
        <div className="overflow-x-auto overflow-y-hidden d-flex flex-nowrap g-4 p-4 w-100 removeScroll">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty">😒 Filme não encontrado 😒</h2>
      )}

      <Footer
        devName={"LiviaOrmeleze"}
        devLink={"https://github.com/LiviaOrmeleze"}
      />
    </div>
  );
};

export default App;
