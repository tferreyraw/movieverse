import "./ListaFavoritos.css";
import { Pelicula } from "../pelicula/Pelicula.jsx";

export const ListaFavoritos = ({
  favourites,
  removeFavouriteMovie,
  isFavourite,
}) => {
  return (
    <div className='container-fluid movieApp pb-5'>
      <h3 className='pb-2'>Tus Favoritos</h3>
      <div className='rows custom-scrollbar '>
        {favourites.map((pelicula) => (
          <Pelicula
            isFavourite={isFavourite}
            removeFavouriteMovie={removeFavouriteMovie}
            key={pelicula.id}
            pelicula={pelicula}
          />
        ))}
      </div>
    </div>
  );
};
