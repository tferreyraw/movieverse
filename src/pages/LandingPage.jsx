import React from "react";
import { ListaPopulares } from "../components/ListaPopulares/ListaPopulares";
import { ListaBusqueda } from "../components/ListaBusqueda/Listabusqueda";
import { ListaFavoritos } from "../components/ListaFavoritos/ListaFavoritos";
import { ListaMejorValoradas } from "../components/ListaMejorValoradas/ListaMejorValoradas";
import { ListaTerror } from "../components/ListaTerror/ListaTerror";
import { ListaAccion } from "../components/ListaAccion/ListaAccion";
import { ListaEmotivas } from "../components/ListaEmotivas/ListaEmotivas";

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
      <ListaMejorValoradas handleFavouriteClick={handleFavouriteClick} />
      <ListaTerror handleFavouriteClick={handleFavouriteClick} />
      <ListaAccion handleFavouriteClick={handleFavouriteClick} />
      <ListaEmotivas handleFavouriteClick={handleFavouriteClick} />
    </>
  );
};
