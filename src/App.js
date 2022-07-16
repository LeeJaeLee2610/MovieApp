import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import Banner from "./components/banner/Banner";
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
