import { get } from "../../utils/connection.jsx";
import { useEffect, useState } from "react";
import "./ListaMejorValoradas.css";
import { Pelicula } from "../pelicula/Pelicula.jsx";

export const ListaMejorValoradas = ({ handleFavouriteClick }) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    get("/movie/top_rated?language=es-MX&page=1").then((data) => {
      setPeliculas(
        data.results.filter((pelicula) => pelicula.poster_path !== null)
      );
    });
  }, []);

  return (
    <div className='container-fluid movieApp pb-5'>
      <h3 className='pb-2'>Las mas valoradas</h3>
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
