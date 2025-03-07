import React from "react";
import styled, { keyframes } from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import getDetailMovies from "../../../apis/getDetailMovies";
import MovieLoading from "../../LoadingAndError/MovieLoading";
import Error from "../../LoadingAndError/Error";

const rotateCenter = keyframes`
  0% {
  opacity:0;
    transform: rotate(0);
  }
  100% {
  opacity:1;
    transform: rotate(360deg);
  }
`;

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
  console.log(movieData);
  const imageUrl = `https://image.tmdb.org/t/p/w500${movieData?.poster_path}`;
  if (error) return <Error />;
  if (isLoading) return <MovieLoading />;

  // 제목, 개봉일, 상영시간, 평점, overview
  return (
    <Screen>
      <Poster src={imageUrl} />
      <Right>
        <Title>{movieData?.title}</Title>
        <DRP>
          <Date>{movieData?.release_date} /</Date>
          <Runtime>{movieData?.runtime}분 /</Runtime>
          <Point>{movieData?.vote_average}</Point>
        </DRP>
        <Overview>
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewContent>{movieData?.overview}</OverviewContent>
        </Overview>
      </Right>
    </Screen>
  );
};

export default MovieDetail;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
`;

const Poster = styled.img`
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${rotateCenter} 1s ease-in-out both;
  animation-delay: 0.5s;
`;
const Title = styled.p`
  width: 80%;
  text-align: center;
  font-size: 40px;
  font-family: "maple";
`;

const DRP = styled.div`
  display: flex;
  font-family: "nanum";
  margin-top: -40px;
`;
const Date = styled.p`
  font-size: 24px;
  margin-right: 5px;
`;

const Runtime = styled.p`
  font-size: 24px;
  margin-right: 5px;
`;

const Point = styled.p`
  font-size: 24px;
  color: yellow;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed white;
  border-radius: 20px;
  color: white;
  width: 90%;
`;

const OverviewTitle = styled.p`
  font-family: "pokemonwrite";
  font-size: 30px;
  padding-left: 20px;
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
  color: red;
`;

const OverviewContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  color: white;
  font-size: 20px;
  font-family: "nanum";
`;
