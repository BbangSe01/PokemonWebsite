import React from "react";
import styled from "styled-components";
import "../../../styles/font.css";
const CryingSound = ({ DetailData }) => {
  return (
    <Crying>
      <CryText>울음소리</CryText>
      <AudioComp controls>
        <source src={DetailData.data.cries.latest} type="audio/ogg" />
      </AudioComp>
    </Crying>
  );
};

export default CryingSound;

const Crying = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-left: 150px;
`;

const CryText = styled.p`
  font-family: "maple";
  font-size: 30px;
  color: #ff8c00;
  margin-right: 30px;
`;

const AudioComp = styled.audio`
  // background-color: #ffff; /* 배경색 변경 (브라우저마다 적용되지 않을 수도 있음) */
`;
