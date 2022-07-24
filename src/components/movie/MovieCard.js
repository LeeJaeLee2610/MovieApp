import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="movie-card rounded-lg p-3 bg-slate-800 flex flex-col h-full select-none">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-[250px] object-cover rounded-lg mb-5"
        />
        <div className="flex flex-col flex-1">
          <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
          <div className="flex items-center justify-between text-sm opacity-50 mb-10">
            <span>{new Date(release_date).getFullYear()}</span>
            <span>{vote_average}</span>
          </div>
          <Button onClick={() => navigate(`/movies/${id}`)}>Watch Now</Button>
          {/* <button
            onClick={() => navigate(`/movies/${id}`)}
            className="py-3 px-6 rounded-lg capitalize bg-primary text-white w-full mt-auto hover:bg-blue-300"
          >
            Watch Now
          </button> */}
        </div>
      </div>
    </Fragment>
  );
};

export default MovieCard;
