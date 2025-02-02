import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokeCard from "../PokeCard/PokeCard";
import location from "../../assets/Images/location.png";
import instance from "../../apis/axios-instance";

const Generation1 = () => {
  const [G1Array, setG1] = useState([]);
  const [G1Names, setG1Names] = useState([]);
  const G1Num = new Array(151); // 관동지방 도감번호는 151번까지

  const getPokeData = async () => {
    setG1([]);
    for (let i = 1; i <= G1Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon/${i}`);
        const data = response.data; // 여기서 response.data가 실제 데이터
        setG1((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const getPokeNames = async () => {
    setG1Names([]);
    for (let i = 1; i <= G1Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon-species/${i}`);
        const data = response.data.names[2].name;
        setG1Names((prev) => [...prev, data]);
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
        <GTitle>관동지방</GTitle>
      </GTitleLine>
      <PokeArea>
        <PokeCard GArray={G1Array} Names={G1Names} />
      </PokeArea>
    </Screen>
  );
};

export default Generation1;

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
