import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokeCard from "../PokeCard/PokeCard";
import location from "../../assets/Images/location.png";
import instance from "../../apis/axios-instance";

const Generation4 = () => {
  const [G4Array, setG4] = useState([]);
  const [G4Names, setG4Names] = useState([]);
  const G4Num = new Array(107); // 관동지방 도감번호는 151번까지

  const getPokeData = async () => {
    setG4([]);
    for (let i = 387; i < 387 + G4Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon/${i}`);
        const data = response.data; // 여기서 response.data가 실제 데이터
        setG4((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const getPokeNames = async () => {
    setG4Names([]);
    for (let i = 387; i <= 387 + G4Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon-species/${i}`);
        const data = response.data.names[2].name;
        setG4Names((prev) => [...prev, data]);
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
        <PokeCard GArray={G4Array} Names={G4Names} />
      </PokeArea>
    </Screen>
  );
};

export default Generation4;

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
