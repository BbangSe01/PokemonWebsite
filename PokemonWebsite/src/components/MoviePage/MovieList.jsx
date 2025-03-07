import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const { movies } = useSelector((state) => state.movie);
  return (
    <ListArea>
      {movies.map((Mov) => {
        return <MovieCard key={Mov.id} arr={Mov} />;
      })}
    </ListArea>
  );
};

export default MovieList;

const ListArea = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
