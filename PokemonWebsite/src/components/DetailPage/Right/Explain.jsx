import React from "react";
import styled from "styled-components";
import pokedexIcon from "../../../assets/Images/pokedexIcon.png";
import ball1 from "../../../assets/Images/ball1.png";
import ball2 from "../../../assets/Images/ball2.png";
import ball3 from "../../../assets/Images/ball3.png";
import "../../../styles/font.css";
const Explain = ({ explaination }) => {
  return (
    <Explanation>
      <PokedexIcon src={pokedexIcon} alt="도감 아이콘" />
      <Balls>
        <EachBall src={ball1} />
        <EachBall src={ball2} />
        <EachBall src={ball3} />
      </Balls>
      <TextArea>
        <Text>{explaination}</Text>
      </TextArea>
    </Explanation>
  );
};

export default Explain;

const Explanation = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 50px;
`;

const PokedexIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  margin-left: 90px;
  top: -30px;
`;
const Balls = styled.div`
  display: flex;
  position: absolute;
  left: 485px;
  bottom: 0px;
`;
const EachBall = styled.img`
  width: 35px;
  height: 35px;
`;
const TextArea = styled.div`
  width: 500px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 100px;
`;

const Text = styled.p`
  color: black;
  font-family: "maple";
  font-size: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;
