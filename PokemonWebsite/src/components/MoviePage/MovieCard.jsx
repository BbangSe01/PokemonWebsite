import React from "react";
import styled from "styled-components";

const MovieCard = (arr) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${arr.arr.poster_path}`;

  console.log(arr.arr);
  return (
    <Card>
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
  margin-right: 90px;
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
