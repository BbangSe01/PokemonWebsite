import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import g1Image from "../assets/Images/G1Image.webp";
import g2Image from "../assets/Images/G2Image.webp";
import g3Image from "../assets/Images/G3Image.webp";
import g4Image from "../assets/Images/G4Image.webp";
import Generation1 from "../components/Generations/Generation1";
import MonsterballIcon from "../assets/Images/MonsterballIcon.png";
const SelectGeneration = () => {
  //next

  return (
    <Map>
      <EachMap>
        <MapName>
          <Monsterball src={MonsterballIcon}></Monsterball>
          <MapTitle>관동지방 (1세대)</MapTitle>
        </MapName>
        <Link to="/G1">
          <MapImage src={g1Image}></MapImage>
        </Link>
      </EachMap>
      <EachMap>
        <MapName>
          <Monsterball src={MonsterballIcon}></Monsterball>
          <MapTitle>성도지방 (2세대)</MapTitle>
        </MapName>
        <Link to="/G2">
          <MapImage src={g2Image}></MapImage>
        </Link>
      </EachMap>
      <EachMap>
        <MapName>
          <Monsterball src={MonsterballIcon}></Monsterball>
          <MapTitle>호연지방 (3세대)</MapTitle>
        </MapName>
        <Link to="/G3">
          <MapImage src={g3Image}></MapImage>
        </Link>
      </EachMap>
      <EachMap>
        <MapName>
          <Monsterball src={MonsterballIcon}></Monsterball>
          <MapTitle>신오지방 (4세대)</MapTitle>
        </MapName>
        <Link to="/G4">
          <MapImage src={g4Image}></MapImage>
        </Link>
      </EachMap>
    </Map>
  );
};

export default SelectGeneration;

const Map = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: wrap;
`;

const EachMap = styled.div`
  width: 30%;
  //   background-color: black;
  display: flex;
  flex-direction: column;
  margin-left: 13%;
  margin-top: 2%;
  margin-bottom: 2%;
  //   border: 1px solid black;
`;

const MapTitle = styled.h3`
  font-family: "maple";
  font-size: 30px;
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  border: 3px solid black;
  border-radius: 20px;
`;

const Monsterball = styled.img`
  padding-top: 33px;
  margin-right: 15px;
  width: 40px;
  height: 40px;
`;

const MapName = styled.div`
  display: flex;
  padding-left: 20px;
`;
