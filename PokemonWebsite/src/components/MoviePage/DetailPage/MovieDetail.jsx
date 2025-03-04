import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import getDetailMovies from "../../../apis/getDetailMovies";

const MovieDetail = () => {
  const location = useLocation();
  const mvId = location.state.movieId;

  const {
    data: movieData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokeMovie"],
    queryFn: () => getDetailMovies(mvId),
  });

  return <div>상세 페이지</div>;
};

export default MovieDetail;
