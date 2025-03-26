import { useEffect, useState } from 'react';
 import './App.css'
 import Header from './components/header/Header';
 import Footer from './components/footer/Footer';
 import MovieCard from './components/movieCard/MovieCard';
 import perfil from "./assets/kiara.jpg"
 import lupa from "./assets/lupa2.png"
 import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.bundle.js";
 import Search from "./components/search/Search";


 const App = () => {
 

   
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
 <div id='app'>
 
       <div className='top-container'>
       <Search className="p-2"search={search} setSearch={setSearch} searchMovies={searchMovies} lupa={lupa} />
       <Header 
       headerPerfil={perfil} />
       </div>

       {movies?.length > 0 ? (
       <div className="container">
     {movies.map((movie, index) => (
       <MovieCard key={index} apiUrl={apiUrl} {...movie} />
     
     ))}
    </div> 
     ) : ( 
       <h2 className='empty'>Filme não encontrado😞</h2>
     )}
 
 <Footer
         devName={"LiviaOrmeleze"}
         devLink={"https://github.com/LiviaOrmeleze"}
       />
     </div>
)
};
 
 export default App;