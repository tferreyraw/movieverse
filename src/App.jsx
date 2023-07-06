import "./App.css";
import { Header } from "./components/header/Header.jsx";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PeliculaDetalle } from "./pages/PeliculaDetalle/PeliculaDetalle";
import { useState } from "react";

function App() {
  const [searchValue, setSearchvalue] = useState("");
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const addFavouriteMovie = (movie) => {
    const movieExist = favourites.some((curr) => movie.id === curr.id);
    if (!movieExist) {
      const newFavouriteList = [...favourites, movie];
      localStorage.setItem("favourites", JSON.stringify(newFavouriteList));
      setFavourites(newFavouriteList);
    }
  };

  const removeFavouriteMovie = (movieID) => {
    setFavourites((prev) => {
      const filtrado = prev.filter((movie) => {
        return movieID !== movie.id;
      });
      localStorage.setItem("favourites", JSON.stringify(filtrado));
      return filtrado;
    });
  };

  return (
    <>
      <BrowserRouter>
        <Header changeSearchValue={(value) => setSearchvalue(value)} />
        <Routes>
          <Route
            path='/'
            element={
              <LandingPage
                searchValue={searchValue}
                removeFavouriteMovie={removeFavouriteMovie}
                handleFavouriteClick={addFavouriteMovie}
                favourites={favourites}
              />
            }
          />
          <Route
            path='/pelicula/:peliculaId'
            element={
              <PeliculaDetalle
                removeFavouriteMovie={removeFavouriteMovie}
                handleFavouriteClick={addFavouriteMovie}
                favourites={favourites}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
