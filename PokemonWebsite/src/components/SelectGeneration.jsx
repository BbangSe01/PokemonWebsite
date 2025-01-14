import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import g1Image from "../assets/Images/G1Image.webp";
import g2Image from "../assets/Images/G2Image.webp";
import g3Image from "../assets/Images/G3Image.webp";
import g4Image from "../assets/Images/G4Image.webp";
import Generation1 from "../components/Generations/Generation1";
const SelectGeneration = () => {
  //next
  // 관동지방부터 클릭 시 페이지 이동 및 151번까지 데이터 받아오고 처리하기
  return (
    <Map>
      <EachMap>
        <MapTitle>관동지방</MapTitle>
        <Link to="/G1">
          <MapImage src={g1Image}></MapImage>
        </Link>
      </EachMap>
      <EachMap>
        <MapTitle>성도지방</MapTitle>
        <Link to="/G2">
          <MapImage src={g2Image}></MapImage>
        </Link>
      </EachMap>
      <EachMap>
        <MapTitle>호연지방</MapTitle>
        <Link to="/G3">
          <MapImage src={g3Image}></MapImage>
        </Link>
      </EachMap>
      <EachMap>
        <MapTitle>신오지방</MapTitle>
        <Link to="/G4">
          <MapImage src={g4Image}></MapImage>
        </Link>
      </EachMap>
    </Map>
  );
};

export default SelectGeneration;

const Map = styled.div`
  width: 100%;
  //   background-color: black;
  display: flex;
  flex-flow: wrap;
`;

const EachMap = styled.div`
  width: 35%;
  //   background-color: black;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
  //   border: 1px solid black;
`;

const MapTitle = styled.h3``;

const MapImage = styled.img`
  width: 100%;
`;
