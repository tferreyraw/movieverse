import { Link } from "react-router-dom";
import "./Pelicula.css";

export const Pelicula = ({
  pelicula,
  handleFavouriteClick,
  removeFavouriteMovie,
}) => {
  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

  return (
    <div className='d-flex moviesCard justify-content-center align-items-center m-3 rounded'>
      <Link to={`/pelicula/${pelicula.id}`}>
        <img
          className={`movieImage rounded`}
          src={imgURL}
          alt={pelicula.title}
        />
      </Link>
      <div
        className='overlay d-flex align-items-center justify-content-center'
        onClick={() =>
          removeFavouriteMovie
            ? removeFavouriteMovie(pelicula.id)
            : handleFavouriteClick(pelicula)
        }
      >
        <span className=' px-2'>
          {" "}
          {removeFavouriteMovie
            ? "Quitar de favoritos"
            : "Agregar a favoritos"}{" "}
        </span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill={removeFavouriteMovie ? "transparent" : "red"}
          className='bi bi-heart-fill'
          viewBox='0 0 16 16'
          stroke={removeFavouriteMovie ? "red" : "trasparent"}
        >
          <path
            fillRule='evenodd'
            d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
          />
        </svg>
      </div>
    </div>
  );
};
