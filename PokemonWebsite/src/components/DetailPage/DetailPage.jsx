import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/axios-instance";
import StatBox from "./Right/StatBox";
import PokeIntro from "./Left/PokeIntro";
import DoubleImg from "./Left/DoubleImg";
import "../../styles/font.css";
import pokeBackground from "../../assets/Images/pokeBackground.jpg";
const DetailPage = () => {
  const location = useLocation();
  const Lodata = location.state;

  const [species, setSpecies] = useState(null);
  const [DetailData, setDetailData] = useState(null);
  const [explaination, setEx] = useState(null);
  const [stats, setStats] = useState(null);

  const getSpecies = async () => {
    try {
      const response = await instance.get(`/pokemon-species/${Lodata.data.id}`);
      const data = response.data;
      setSpecies(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setDetailData(Lodata);
  }, []);
  console.log(DetailData);

  useEffect(() => {
    if (DetailData) {
      getSpecies();
      setStats(DetailData.data.stats);
    }
  }, [DetailData]);
  // console.log(species);
  // console.log(stats);

  useEffect(() => {
    if (species) {
      const koreanEntries = species.flavor_text_entries.filter(
        (entry) => entry.language.name === "ko"
      );
      setEx(koreanEntries[5].flavor_text);
    }
  }, [species]);

  // 키/무게 , 도감 설명, 종족값, 울음소리
  return (
    <DetailArea>
      {DetailData && species && explaination && stats ? (
        <>
          <Left>
            <PokeIntro DetailData={DetailData} species={species} />
            <DoubleImg DetailData={DetailData} />
          </Left>
          <Right>
            <TAndW>
              <Tall>키: {DetailData.data.height / 10}m</Tall>
              <Weight>몸무게 : {DetailData.data.weight / 10}kg</Weight>
            </TAndW>
            <Explanation>{explaination}</Explanation>
            <StatBox stats={stats} />
            <audio controls>
              <source src={DetailData.data.cries.latest} type="audio/ogg" />
            </audio>
          </Right>
        </>
      ) : null}
    </DetailArea>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //   background-color: white;
`;

const TAndW = styled.div`
  display: flex;
`;

const Tall = styled.p``;

const Weight = styled.p``;

const Explanation = styled.div``;

const AudioBox = styled.div`
  background-color: white;
  width: 100px;
  height: 100px;
`;

const AudioButton = styled.audio``;
