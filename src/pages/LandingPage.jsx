import React from "react";
import { ListaPopulares } from "../components/ListaPopulares/ListaPopulares";
import { ListaBusqueda } from "../components/ListaBusqueda/Listabusqueda";
import { ListaFavoritos } from "../components/ListaFavoritos/ListaFavoritos";

export const LandingPage = ({
  searchValue,
  favourites,
  handleFavouriteClick,
  removeFavouriteMovie,
}) => {
  return (
    <>
      <ListaBusqueda
        searchValue={searchValue}
        handleFavouriteClick={handleFavouriteClick}
      />
      <ListaFavoritos
        favourites={favourites}
        removeFavouriteMovie={removeFavouriteMovie}
      />
      <ListaPopulares handleFavouriteClick={handleFavouriteClick} />
    </>
  );
};
