import React from "react";
import styled from "styled-components";
import PokeCard from "../PokeCard/PokeCard";
import location from "../../assets/Images/location.png";
import { useQuery } from "@tanstack/react-query";
import instance from "../../apis/instance/axios-instance";
import Loading from "../LoadingAndError/Loading";
import Error from "../LoadingAndError/Error";
const getG3PokeData = async () => {
  const requests = Array.from({ length: 135 }, (_, i) =>
    instance.get(`/pokemon/${i + 252}`).then((res) => res.data)
  );
  // Promise.all을 이용해 여러개의 비동기 작업을 한번에 처리
  // promise란 비동기 처리의 완료 여부를 나타내는 객체
  return Promise.all(requests);
};

const getG3PokeNames = async () => {
  const requests = Array.from({ length: 135 }, (_, i) =>
    instance
      .get(`/pokemon-species/${i + 252}`)
      .then((res) => res.data.names[2].name)
  );
  return Promise.all(requests);
};

const Generation3 = () => {
  const {
    data: G3Array,
    isLoading: isLoadingData,
    error: errorData,
  } = useQuery({
    queryKey: ["g3", "pokemon"],
    queryFn: getG3PokeData,
  });
  const {
    data: G3Name,
    isLoading: isLoadingName,
    error: errorName,
  } = useQuery({
    queryKey: ["g3", "pokename"],
    queryFn: getG3PokeNames,
  });

  if (isLoadingData || isLoadingName) return <Loading />;
  if (errorData || errorName) return <Error />;
  return (
    <Screen>
      <GTitleLine>
        <GLocation src={location} />
        <GTitle>호연지방</GTitle>
      </GTitleLine>
      <PokeArea>
        <PokeCard GArray={G3Array} Names={G3Name} />
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
