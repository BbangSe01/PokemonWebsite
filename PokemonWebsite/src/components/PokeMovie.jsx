import React, { useEffect } from "react";
import movieInstance from "../apis/instance/movie-instance";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie } from "../stores/movieSlice";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import MovieList from "./MoviePage/MovieList";
import Loading from "./LoadingAndError/Loading";
import Error from "./LoadingAndError/Error";
import img1 from "../assets/Images/free-icon-action-188953.png";
const PokeMovie = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movie);

  // slice에서 아직 비동기 통신을 하지 않았을 경우, fetchMovie를 실행시켜 비동기 통신을 수행시킴.
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovie());
    }
  }, [dispatch, status]);

  if (status === "Loading") return <Loading />;
  if (status === "Error") return <Error />;

  return (
    <Screen>
      <Title>
        {/* <Img1 src={img1} /> */}
        영화 리스트
        <Img2 src={img1} />
      </Title>
      {status === "Success" ? <MovieList /> : null}
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
  background-color: black;
`;

const Title = styled.p`
  font-size: 50px;
  font-family: "maple";
  margin-bottom: 70px;
  color: white;
  display: flex;
  border-bottom: 3px solid white;
`;

const Img1 = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const Img2 = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 10px;
`;
