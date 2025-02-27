import React from "react";
import styled, { keyframes } from "styled-components";
import ErrorIcon from "../../assets/Images/free-icon-avatar-1752875.png";

const Error = () => {
  return (
    <Screen>
      <ZziBlock>
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
      </ZziBlock>
      <ErrorMsg>Error!!!</ErrorMsg>
      <ZziBlock>
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
        <ZziImg src={ErrorIcon} />
      </ZziBlock>
    </Screen>
  );
};

export default Error;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ZziBlock = styled.div`
  display: flex;
`;

const ErrorMsg = styled.p`
  font-size: 80px;
  font-family: "pokemonwrite";
  margin-top: 50px;
  margin-bottom: 100px;
`;
const ZziImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;
