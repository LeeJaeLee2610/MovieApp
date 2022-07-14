import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";
import "swiper/scss";

const App = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4 h-screen sticky top-0 border-r-2 bg-[#19191b] mr-5 border-[#36333a] pl-5 pt-5">
        <div className="text-white font-bold text-5xl">Watch</div>
        <div className="menu">
          <span>Menu</span>
          <div className="flex flex-col flex-1">
            <span>Home</span>
            <span>Community</span>
            <span>Discover</span>
            <span>Awards</span>
            <span>Celebs</span>
          </div>
        </div>
        <div className="library">
          <span>Library</span>
          <div className="flex flex-col flex-1">
            <span>Recent</span>
            <span>Top rated</span>
            <span>Downloaded</span>
          </div>
        </div>
        <div className="category">
          <div className="flex flex-col flex-1">
            <span>TV Series</span>
            <span>Movies</span>
            <span>Anime</span>
          </div>
        </div>
        <div className="general">
          <div className="flex flex-col flex-1">
            <span>Settings</span>
            <span>Log out</span>
          </div>
        </div>
        <div className="avatar flex items-center justify-start">
          <img
            src="https://cdn.dribbble.com/users/2400293/screenshots/16630840/media/ed6af0d38d460ff9ee426ad69e6435ea.png?compress=1&resize=1000x750&vertical=top"
            alt=""
            className="w-10 h-10 object-cover overflow-hidden rounded-full"
          />
        </div>
      </div>
      <div className="basis-2/4">
        <header className="header flex items-center justify-center gap-x-5 text-white py-5 mb-5">
          <span className="text-primary">Home</span>
          <span>Movies</span>
        </header>
        <Banner></Banner>
        <section className="movies-layout page-container pb-10">
          <h2 className="capitalize text-white mb-5 text-2xl font-bold">
            Now Playing
          </h2>
          <MovieList type="now_playing"></MovieList>
        </section>
        <section className="movies-layout page-container pb-10">
          <h2 className="capitalize text-white mb-5 text-2xl font-bold">
            Top Rated
          </h2>
          <MovieList type="top_rated"></MovieList>
        </section>
        <section className="movies-layout page-container pb-10">
          <h2 className="capitalize text-white mb-5 text-2xl font-bold">
            Trending
          </h2>
          <MovieList type="popular"></MovieList>
        </section>
      </div>
      <div className="basis-1/4 ml-5 border-l-2 border-[#36333a]">OK</div>
    </div>
  );
};

export default App;
