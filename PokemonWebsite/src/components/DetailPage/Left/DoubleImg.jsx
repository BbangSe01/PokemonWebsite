import React from "react";
import styled from "styled-components";
import "../../../styles/font.css";
const DoubleImg = ({ DetailData }) => {
  return (
    <ImgArea>
      <ImgBox>
        <PokeImg src={DetailData.data.sprites.front_default} />
        <ImgEx>일반</ImgEx>
      </ImgBox>
      <ImgBox>
        <Irochi src={DetailData.data.sprites.front_shiny} />
        <ImgEx>이로치</ImgEx>
      </ImgBox>
    </ImgArea>
  );
};

export default DoubleImg;

const ImgArea = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  height: 400px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
`;
const PokeImg = styled.img`
  width: 100%; /* 부모 요소의 너비에 맞게 조정 */
  height: 100%; /* 부모 요소의 높이에 맞게 조정 */
  object-fit: contain; /* 이미지 비율 유지하면서 영역에 맞게 크기 조정 */
`;
const ImgEx = styled.p`
  font-family: "maple";
  font-size: 30px;
  color: white;
`;
const Irochi = styled.img`
  width: 100%; /* 부모 요소의 너비에 맞게 조정 */
  height: 100%; /* 부모 요소의 높이에 맞게 조정 */
  object-fit: contain; /* 이미지 비율 유지하면서 영역에 맞게 크기 조정 */
`;
