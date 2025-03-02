import React from "react";
import movieInstance from "../apis/movie-instance";
import { useQuery } from "@tanstack/react-query";

const getPokeMovies = async () => {
  const keyWord = "포켓몬스터";
  const url = `/search/movie?query=${keyWord}&include_adult=false&language=ko&page=1`;
  try {
    const response = await movieInstance.get(url).then((res) => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const PokeMovie = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokeMovieData"],
    queryFn: getPokeMovies,
  });
  console.log(movies);
  return (
    <div>
      <p>임시 페이지 1</p>
    </div>
  );
};

export default PokeMovie;
