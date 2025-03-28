import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";
import perfil from "./assets/kiara.jpg";
import logo from "./assets/logocinestar.png";
import lupa from "./assets/lupa2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Search from "./components/search/Search";

const App = () => {
  const colorScheme = () => {
    const tema = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    document.documentElement.setAttribute("data-bs-theme", tema);
  };

  colorScheme();

  // Adiciona o evento de mudança de tema automaticamente
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", colorScheme);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  // const apiKey = import.meta.env.VITE_OMDB_API_KEY
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimentando com dados para não ficar nulo com useEffect
  useEffect(() => {
    searchMovies("Harry Potter");
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
      <div className="top-container">
        <Search
          className="p-2"
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
          lupa={lupa}
        />
        <Header headerPerfil={perfil} />
      </div>

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
        devName={"CodeGirls"}
        devLink={"https://amzn.to/4iKFD6e"}
      />
    </div>
  );
};

export default App;
