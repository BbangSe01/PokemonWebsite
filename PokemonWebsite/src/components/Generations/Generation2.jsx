import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokeCard from "../PokeCard/PokeCard";
import location from "../../assets/Images/location.png";
import instance from "../../apis/axios-instance";

const Generation2 = () => {
  const [G2Array, setG2] = useState([]);
  const [G2Names, setG2Names] = useState([]);
  const G2Num = new Array(100); // 관동지방 도감번호는 151번까지

  const getPokeData = async () => {
    setG2([]);
    for (let i = 152; i < 152 + G2Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon/${i}`);
        const data = response.data; // 여기서 response.data가 실제 데이터
        setG2((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const getPokeNames = async () => {
    setG2Names([]);
    for (let i = 152; i <= 152 + G2Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon-species/${i}`);
        const data = response.data.names[2].name;
        setG2Names((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    getPokeData();
    getPokeNames();
  }, []);

  return (
    <Screen>
      <GTitleLine>
        <GLocation src={location} />
        <GTitle>성도지방</GTitle>
      </GTitleLine>
      <PokeArea>
        <PokeCard GArray={G2Array} Names={G2Names} />
      </PokeArea>
    </Screen>
  );
};

export default Generation2;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const GTitleLine = styled.div`
  display: flex;
  align-items: center;
  // background-color: black;
  width: 300px;
  margin-left: 90px;
  margin-top: 20px;
`;

const GLocation = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 10px;
`;

const GTitle = styled.h1`
  font-family: "maple";
`;
const PokeArea = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  // justify-content: center;
  flex-flow: wrap;
  // background-color: black;
`;
