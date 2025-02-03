import React from "react";
import styled from "styled-components";
import monsterball from "../../assets/Images/MonsterballIcon.png";
import "../../styles/font.css";
import typeIcons from "../../assets/Images/typeIcons";
import "../../styles/type.css";
import { useNavigate } from "react-router-dom";
const PokeCard = ({ GArray, Names }) => {
  const navigate = useNavigate();

  const MoveDetail = (data) => {
    navigate("/DetailPage", {
      state: { data },
    });
  };
  return (
    <>
      {GArray && Names
        ? GArray.map((Info, idx) => {
            return (
              <CardArea onClick={() => MoveDetail(Info)}>
                <Intro>
                  <Monsterball src={monsterball} />
                  <Numbers>NO.{Info.id} </Numbers>
                  <Name>{Names[idx]}</Name>
                </Intro>
                <PokeImg src={Info.sprites.front_default} />
                <TypeLine>
                  {Info.types.map((eachTypes, idx) => {
                    return (
                      <div key={idx} className={eachTypes.type.name}>
                        <img src={typeIcons[eachTypes.type.name]} />
                      </div>
                    );
                  })}
                </TypeLine>
              </CardArea>
            );
          })
        : null}
    </>
  );
};

export default PokeCard;

const CardArea = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: black;
  margin-left: 60px;
  margin-bottom: 80px;
  width: 230px;
  height: 300px;
  border: 1px solid black;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.3s;
  }
`;

const PokeImg = styled.img`
  width: 100%;
  height: 65%;
  // background-color: black;
`;

const Intro = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  font-size: 20px;
  background-color: #f5f5dc;
  border-top-left-radius: 30px; /* 왼쪽 하단 둥글게 */
  border-top-right-radius: 30px; /* 오른쪽 하단 둥글게 */
`;
const Monsterball = styled.img`
  width: 30px;
  height: 30px;
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

const TypeLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  background-color: #f5f5dc;
  border-bottom-left-radius: 30px; /* 왼쪽 하단 둥글게 */
  border-bottom-right-radius: 30px; /* 오른쪽 하단 둥글게 */
`;
