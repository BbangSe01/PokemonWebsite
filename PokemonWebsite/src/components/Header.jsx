import React from "react";
import styled from "styled-components";
import "../styles/font.css";
const HeaderComp = () => {
  return (
    <Header>
      <Title>Pokemon Pokédex </Title>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;
const Title = styled.h2`
  font-family: "pokemonwrite";
  color: black;
`;
