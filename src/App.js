import React, { Fragment } from "react";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
import HomePage from "./page/HomePage";
import MoviesPage from "./page/MoviesPage";
import MovieDetailsPage from "./page/MovieDetailsPage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
          <Route
            path="/movies/:movieID"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
