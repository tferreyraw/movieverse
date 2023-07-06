import { get } from "../../utils/connection.jsx";
import { useEffect, useState } from "react";
import "./ListaAccion.css";
import { Pelicula } from "../pelicula/Pelicula.jsx";

export const ListaAccion = ({ handleFavouriteClick }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    get(
      "/discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=vote_count.desc&with_genres=28"
    ).then((data) => {
      setPeliculas(
        data.results.filter((pelicula) => pelicula.poster_path !== null)
      );
    });
  }, []);

  return (
    <div className='container-fluid movieApp pb-5'>
      <h3 className='pb-2'>Accion y Aventura</h3>
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
