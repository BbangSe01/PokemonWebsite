import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import instance from "../../apis/axios-instance";
import PokeIntro from "./Left/PokeIntro";
import DoubleImg from "./Left/DoubleImg";
import "../../styles/font.css";
import pokeBackground from "../../assets/Images/pokeBackground.jpg";
const DetailPage = () => {
  const location = useLocation();
  const Lodata = location.state;

  const [species, setSpecies] = useState(null);
  const [DetailData, setDetailData] = useState(null);

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
    getSpecies();
  }, [DetailData]);
  console.log(species);
  // 특성(숨특) , 울음소리 , 키/무게 , 이름, 타입, 이미지, 도감 설명명
  return (
    <DetailArea>
      {DetailData && species ? (
        <>
          <Left>
            <PokeIntro DetailData={DetailData} species={species} />
            <DoubleImg DetailData={DetailData} />
          </Left>
          <Right></Right>
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
