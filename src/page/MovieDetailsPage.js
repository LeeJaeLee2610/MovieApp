import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";

//https://api.themoviedb.org/3/movie/${type}

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  // console.log(movieID);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=4037a7bba03884bf5a7ccd8b780bd269`,
    fetcher
  );
  // console.log("data :>> ", data);
  if (!data) return null;
  return (
    <Fragment>
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        {data.title}
      </h1>
      <div className="flex items-center justify-center gap-x-5 mb-10">
        {data.genres.map((item) => (
          <span
            className="py-2 px-4 border border-primary text-primary rounded-md"
            key={item.id}
          >
            {item.name}
          </span>
        ))}
      </div>
      <p className="text-center text-sm leading-relaxed max-w-[600px] mx-auto mb-10">
        {data.overview}
      </p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </Fragment>
  );
};

//https://api.themoviedb.org/3/credit/{credit_id}?api_key=<<api_key>>

function MovieCredits() {
  const { movieID } = useParams();
  // console.log(movieID);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=4037a7bba03884bf5a7ccd8b780bd269`,
    fetcher
  );
  // console.log(data);
  if (!data) return null;
  const { cast } = data;
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieVideos() {
  const { movieID } = useParams();
  // console.log(movieID);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=4037a7bba03884bf5a7ccd8b780bd269`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="mb-5 text-xl font-medium  p-3 bg-primary inline-block rounded-md">
              {item.name}
            </h3>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                width="1264"
                height="711"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="Disfigure - Blank [NCS Release]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieSimilar() {
  const { movieID } = useParams();
  // console.log(movieID);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=4037a7bba03884bf5a7ccd8b780bd269`,
    fetcher
  );
  // console.log(data);
  if (!data) return null;
  const { results } = data;
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar Movie</h2>
      <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
