import React from "react";
import styled, { keyframes } from "styled-components";
import popcorn from "../../assets/Images/free-icon-popcorn-3163508.png";
const bounceInTop = keyframes`
  0% {
    transform: translateY(-100px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`;
const MovieLoading = () => {
  return (
    <Screen>
      <LoadingMessage>팝콘 먹는 시간...</LoadingMessage>
      <PopcornImg src={popcorn} />
    </Screen>
  );
};

export default MovieLoading;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const LoadingMessage = styled.p`
  font-family: "maple";
  font-size: 60px;
  color: white;
`;

const PopcornImg = styled.img`
  width: 100px;
  height: 100px;
  animation: ${bounceInTop} 1s both;
  animation-iteration-count: infinite;
`;
