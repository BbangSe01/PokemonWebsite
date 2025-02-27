import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/axios-instance";
import "../../styles/font.css";
import pokeBackground from "../../assets/Images/pokeBackground.jpg";
import PokeIntro from "./Left/PokeIntro";
import DoubleImg from "./Left/DoubleImg";
import TallAndWeight from "./Right/TallAndWeight";
import Explain from "./Right/Explain";
import StatBox from "./Right/StatBox";
import CryingSound from "./Right/CryingSound";
import LoadingDetail from "../LoadingAndError/LoadingDetail";
import Error from "../LoadingAndError/Error";
const DetailPage = () => {
  const location = useLocation();
  const Lodata = location.state;

  const [species, setSpecies] = useState(null);
  const [DetailData, setDetailData] = useState(null);
  const [explaination, setEx] = useState(null);
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getSpecies = async () => {
    try {
      const response = await instance.get(`/pokemon-species/${Lodata.data.id}`);
      const data = response.data;
      setSpecies(data);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setDetailData(Lodata);
  }, []);
  // console.log(Lodata);

  useEffect(() => {
    if (DetailData) {
      getSpecies();
      setStats(DetailData.data.stats);
    }
  }, [DetailData]);

  useEffect(() => {
    if (species && species.flavor_text_entries) {
      const koreanEntries = species.flavor_text_entries.filter(
        (entry) => entry.language.name === "ko"
      );
      setEx(koreanEntries[0].flavor_text);
    }
  }, [species]);

  useEffect(() => {
    DetailData && species && explaination && stats ? setIsLoading(false) : null;
  }, [DetailData, species, explaination, stats]);

  return (
    <>
      {isError ? (
        <Error />
      ) : !isLoading ? (
        <DetailArea>
          <Left>
            <PokeIntro DetailData={DetailData} species={species} />
            <DoubleImg DetailData={DetailData} />
          </Left>
          <Right>
            <RightContents>
              <TallAndWeight DetailData={DetailData} />
              <Explain explaination={explaination} />
              <StatBox stats={stats} />
              <CryingSound DetailData={DetailData} />
            </RightContents>
          </Right>
        </DetailArea>
      ) : (
        <LoadingDetail />
      )}
    </>
  );
};

export default DetailPage;

const DetailArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url(${pokeBackground});
  background-size: cover; /* 배경 이미지가 영역을 가득 채우도록 */
  background-position: center center; /* 배경 이미지를 중앙에 배치 */
  background-repeat: no-repeat; /* 배경 이미지가 반복되지 않도록 */
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: white;
`;
const RightContents = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  // background-color: blue;
`;
