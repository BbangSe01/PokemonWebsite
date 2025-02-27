import React from "react";
import styled, { keyframes } from "styled-components";
import PokemonGo from "../../assets/Images/free-icon-pokemon-go-287223.png";

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

const LoadingDetail = () => {
  return (
    <Screen>
      <LoadingLine>
        <LoadingMessage>포켓몬 정보를 불러오는 중입니다...</LoadingMessage>
        <EvImg src={PokemonGo} />
      </LoadingLine>
    </Screen>
  );
};

export default LoadingDetail;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounceInTop} 1s both;
  animation-iteration-count: infinite;
`;
const LoadingMessage = styled.p`
  font-family: "maple";
  font-size: 60px;
`;

const EvImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;
