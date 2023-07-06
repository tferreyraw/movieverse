import { get } from "../../utils/connection.jsx";
import { useEffect, useState } from "react";
import "./ListaEmotivas.css";
import { Pelicula } from "../pelicula/Pelicula.jsx";

export const ListaEmotivas = ({ handleFavouriteClick }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    get(
      "/discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=vote_count.desc&with_genres=10749%2C18%2C"
    ).then((data) => {
      setPeliculas(
        data.results.filter((pelicula) => pelicula.poster_path !== null)
      );
    });
  }, []);

  return (
    <div className='container-fluid movieApp pb-5'>
      <h3 className='pb-2'>Drama y Romance</h3>
      <div className='rows custom-scrollbar '>
        {peliculas.map((pelicula) => (
          <Pelicula
            key={pelicula.id}
            pelicula={pelicula}
            handleFavouriteClick={handleFavouriteClick}
          />
        ))}
      </div>
    </div>
  );
};
