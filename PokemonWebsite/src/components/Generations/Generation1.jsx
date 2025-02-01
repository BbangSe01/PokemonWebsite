import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import monsterball from "../../assets/Images/MonsterballIcon.png";
import instance from "../../apis/axios-instance";
import "../../styles/font.css";
// Next
// 1. 1~151번까지 포켓몬 데이터 배열에 받기
// 2. 도감 컴포넌트 생성하기
// 3. 도감 컴포넌트에 포켓몬 데이터 뿌리기

const Generation1 = () => {
  const [G1Array, setG1] = useState([]);
  const [Names, setNames] = useState([]);
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
    setNames([]);
    for (let i = 1; i <= G1Num.length; i++) {
      try {
        const response = await instance.get(`/pokemon-species/${i}`);
        const data = response.data.names[2].name;
        setNames((prev) => [...prev, data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    getPokeData();
    getPokeNames();
  }, []);

  console.log(G1Array);
  return (
    <Screen>
      <PokeArea>
        {G1Array && Names
          ? G1Array.map((Info, idx) => {
              return (
                <PokeCard>
                  <Intro>
                    <Monsterball src={monsterball} />
                    <Numbers>NO.{Info.id} </Numbers>
                    <Name>{Names[idx]}</Name>
                  </Intro>
                  <PokeImg src={Info.sprites.front_default} />
                </PokeCard>
              );
            })
          : null}
      </PokeArea>
    </Screen>
  );
};

export default Generation1;

const Screen = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const PokeArea = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`;
const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: black;
  margin-right: 20px;
  margin-bottom: 50px;
  width: 230px;
  height: 300px;
  border: 1px solid black;
  border-radius: 30px;
`;

const PokeImg = styled.img`
  width: 100%;
  height: 65%;
  // background-color: black;
`;

const Intro = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
  // background-color: black;
`;
const Monsterball = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

const Numbers = styled.p`
  font-family: "pokemonwrite";
  padding-bottom: 7px;
`;

const Name = styled.p`
  padding-left: 10px;
  font-family: "maple";
`;
