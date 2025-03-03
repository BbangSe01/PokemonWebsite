import React from "react";
import getPokeMovies from "../apis/getPokeMovies";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import MovieList from "./MoviePage/MovieList";
import Loading from "./LoadingAndError/Loading";
import Error from "./LoadingAndError/Error";

const PokeMovie = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokeMovieData"],
    queryFn: getPokeMovies,
  });
  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <Screen>
      <Title>영화 리스트</Title>
      {movies ? <MovieList movies={movies} /> : null}
    </Screen>
  );
};

export default PokeMovie;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 50px;
  font-family: "maple";
  margin-bottom: 70px;
`;
