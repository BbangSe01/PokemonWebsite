import React from "react";
import styled from "styled-components";
const TallAndWeight = ({ DetailData }) => {
  return (
    <TAndW>
      <Tall>✅키: {DetailData.data.height / 10}m</Tall>
      <Weight>✅몸무게 : {DetailData.data.weight / 10}kg</Weight>
    </TAndW>
  );
};

export default TallAndWeight;

const TAndW = styled.div`
  display: flex;
  font-family: "maple";
  color: white;
  font-size: 25px;
  margin-bottom: 20px;
  margin-left: 150px;
`;

const Tall = styled.p`
  margin-right: 40px;
`;

const Weight = styled.p``;
