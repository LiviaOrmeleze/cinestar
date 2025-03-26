import styles from "./MovieCard.module.css";
import MovieDescription from "../movieDescription/MovieDescription";
import { useState } from "react";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div
        className={`flex-shrink-0 m-3 overflow-hidden position-relative border-0 ${styles.movie}`}
        onClick={toggleModal}
      >
        <div>
          <p>{props.Year}</p>
        </div>

        <div className="d-flex justify-content-center">
          <img className="object-fit-cover w-75" src={props.Poster} alt="" />
        </div>

        <div className="hoverT">
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </div>
      {isModalOpen && (
        <MovieDescription
          click={toggleModal}
          apiUrl={props.apiUrl}
          movieID={props.imdbID}
        />
      )}
    </>
  );
};

export default MovieCard;
