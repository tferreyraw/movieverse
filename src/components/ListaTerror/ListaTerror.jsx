import { get } from "../../utils/connection.jsx";
import { useEffect, useState } from "react";
import "./ListaTerror.css";
import { Pelicula } from "../pelicula/Pelicula.jsx";

export const ListaTerror = ({ handleFavouriteClick }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    get(
      "/discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=popularity.desc&with_genres=27"
    ).then((data) => {
      setPeliculas(
        data.results.filter((pelicula) => pelicula.poster_path !== null)
      );
    });
  }, []);

  return (
    <div className='container-fluid movieApp pb-5'>
      <h3 className='pb-2'>Terror y suspenso</h3>
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
