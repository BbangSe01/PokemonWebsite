import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MovieCard = (arr) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${arr.arr.poster_path}`;
  const navigate = useNavigate();

  const toMovieDetail = (id) => {
    navigate(`/pokeMovie/${id}`, {
      state: {
        movieId: id,
      },
    });
  };
  return (
    <Card onClick={() => toMovieDetail(arr.arr.id)}>
      <Poster src={imageUrl} alt={arr.arr.title} />
      <Name>{arr.arr.title}</Name>
    </Card>
  );
};

export default MovieCard;

const Card = styled.div`
  width: 250px;
  height: 300px;
  //   background-color: black;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Poster = styled.img`
  width: 100%;
  height: 250px;
`;

const Name = styled.p`
  font-family: "maple";
  font-size: 20px;
  color: white;
`;
