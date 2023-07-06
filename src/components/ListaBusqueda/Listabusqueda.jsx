import { get } from "../../utils/connection.jsx";
import { useCallback, useEffect, useState } from "react";
import "./ListaBusqueda.css";
import { Pelicula } from "../pelicula/Pelicula.jsx";

export const ListaBusqueda = ({ searchValue, handleFavouriteClick }) => {
  const [peliculas, setPeliculas] = useState([]);

  const getMovies = useCallback(async () => {
    try {
      const res = await get(
        `/search/movie?query=${searchValue}&include_adult=false&language=es-MX&page=1`
      );

      setPeliculas(
        res.results.filter((pelicula) => pelicula.poster_path !== null)
      );
    } catch (error) {
      alert(error.message);
    }
  }, [searchValue]);

  useEffect(() => {
    getMovies();
  }, [searchValue, getMovies]);

  return (
    <div className='container-fluid movieApp pt-3 pb-5'>
      <h3 className='pb-2'>Tu busqueda</h3>
      <div className='rows custom-scrollbar'>
        {peliculas.length ? (
          peliculas.map((pelicula) => (
            <Pelicula
              key={pelicula.id}
              pelicula={pelicula}
              handleFavouriteClick={handleFavouriteClick}
            />
          ))
        ) : (
          <div>Busca tu pelicula Favorita </div>
        )}
      </div>
    </div>
  );
};
