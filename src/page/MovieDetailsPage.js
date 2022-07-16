import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";

//https://api.themoviedb.org/3/movie/${type}

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  console.log(movieID);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=4037a7bba03884bf5a7ccd8b780bd269`,
    fetcher
  );
  console.log(data);
  return <div>Oi ban oi</div>;
};

export default MovieDetailsPage;
