import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokeCard from "../PokeCard/PokeCard";
import location from "../../assets/Images/location.png";
import instance from "../../apis/axios-instance";

const Generation3 = () => {
  const [G3Array, setG3] = useState([]);
  const [G3Names, setG3Names] = useState([]);
  const G3Num = new Array(135); // 관동지방 도감번호는 151번까지

  const getPokeData = async () => {
    setG3([]);
    for (let i = 252; i < 252 + G3Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon/${i}`);
        const data = response.data; // 여기서 response.data가 실제 데이터
        setG3((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const getPokeNames = async () => {
    setG3Names([]);
    for (let i = 252; i <= 252 + G3Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon-species/${i}`);
        const data = response.data.names[2].name;
        setG3Names((prev) => [...prev, data]);
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
        <PokeCard GArray={G3Array} Names={G3Names} />
      </PokeArea>
    </Screen>
  );
};

export default Generation3;

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
