import React from "react";
import styled from "styled-components";
import "../../../styles/font.css";
import monsterball from "../../../assets/Images/MonsterballIcon.png";
const PokeIntro = ({ DetailData, species }) => {
  return (
    <Intro>
      <Monsterball src={monsterball} />
      <Numbers>NO.{DetailData.data.id} </Numbers>
      <Name>{species.names[2].name}</Name>
    </Intro>
  );
};

export default PokeIntro;

const Intro = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  font-size: 40px;
  margin-left: 70px; /* 왼쪽 여백을 조금 추가 */
  color: white;
  width: 100%; /* 전체 너비를 차지하도록 설정 */
  justify-content: flex-start; /* 텍스트를 좌측 끝으로 정렬 */
`;
const Monsterball = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-left: 20px;
`;

const Numbers = styled.p`
  font-family: "pokemonwrite";
  padding-bottom: 7px;
`;

const Name = styled.p`
  padding-left: 10px;
  font-family: "maple";
`;
