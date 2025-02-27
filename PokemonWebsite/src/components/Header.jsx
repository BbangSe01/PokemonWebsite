import React from "react";
import styled from "styled-components";
import "../styles/font.css";
import { Link } from "react-router-dom";
import TitleIcon from "../assets/Images/TitleIcon.png";
import Navb1 from "../assets/Images/Navb1.png";
import Navb2 from "../assets/Images/Navb2.png";
const HeaderComp = () => {
  return (
    <Header>
      <TitleLine>
        <Pikachu src={TitleIcon} />
        <Title>Pokemon Pokédex </Title>
      </TitleLine>
      <Navbar>
        <StyledLink to="/">
          <NavImo src={Navb1} />
          <NavTitle>지방 별 포켓몬</NavTitle>
        </StyledLink>
        <StyledLink to="/Temp1">
          <NavImo src={Navb2} />
          <NavTitle>포켓몬 무비</NavTitle>
        </StyledLink>
      </Navbar>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.div`
  width: 100%;
  height: 11%;
  display: flex;
  background-color: yellow;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
`;

const TitleLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  font-family: "pokemonwrite";
  color: black;
  padding-bottom: 10px;
`;

const Pikachu = styled.img`
  width: 40px;
  height: 40px;
  padding-top: 15px;
  margin-right: 5px;
`;

const Navbar = styled.div`
  margin-left: 25%;
  height: 70px;
  display: flex;
`;

const NavTitle = styled.p`
  font-family: "maple";
  font-size: 20px;
  margin-right: 25px;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none; /* 링크 밑줄 제거 */
  margin-right: 25px;
  font-family: "pokemonwrite";
  font-size: 15px;
  color: black;
  margin-top: 20px;
`;

const NavImo = styled.img`
  width: 25px;
  height: 25px;
  padding-top: 22px;
  margin-right: 3px;
`;
