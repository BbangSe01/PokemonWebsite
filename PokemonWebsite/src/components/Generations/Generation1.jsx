import React from "react";
import styled from "styled-components";
import PokeCard from "../PokeCard/PokeCard";
import location from "../../assets/Images/location.png";
import { useQuery } from "@tanstack/react-query";
import instance from "../../apis/axios-instance";

const getG1PokeData = async () => {
  const requests = Array.from({ length: 151 }, (_, i) =>
    instance.get(`/pokemon/${i + 1}`).then((res) => res.data)
  );
  // Promise.all을 이용해 여러개의 비동기 작업을 한번에 처리
  // promise란 비동기 처리의 완료 여부를 나타내는 객체
  return Promise.all(requests);
};

const getG1PokeNames = async () => {
  const requests = Array.from({ length: 151 }, (_, i) =>
    instance
      .get(`/pokemon-species/${i + 1}`)
      .then((res) => res.data.names[2].name)
  );
  return Promise.all(requests);
};

const Generation1 = () => {
  const {
    data: G1Array,
    isLoading: isLoadingData,
    error: errorData,
  } = useQuery({
    queryKey: ["g1", "pokemon"],
    queryFn: getG1PokeData,
  });
  const {
    data: G1Name,
    isLoading: isLoadingName,
    error: errorName,
  } = useQuery({
    queryKey: ["g1", "pokename"],
    queryFn: getG1PokeNames,
  });

  if (isLoadingData || isLoadingName) return <p>로딩중!!!!1</p>;
  if (errorData || errorName) return <p>에러!!!!</p>;

  return (
    <Screen>
      <GTitleLine>
        <GLocation src={location} />
        <GTitle>관동지방</GTitle>
      </GTitleLine>
      <PokeArea>
        <PokeCard GArray={G1Array} Names={G1Name} />
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
