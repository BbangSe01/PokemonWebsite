import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StatBox = ({ stats }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (stats) {
      let adding = 0;
      stats.forEach((info) => (adding += info.base_stat));
      setTotal(adding);
    }
  }, [stats]);

  return (
    <Stats>
      <StatTitle>종족값 {total}</StatTitle>
      <Line>
        <EachStat>HP: {stats[0].base_stat}</EachStat>
        <EachStat>공격: {stats[1].base_stat}</EachStat>
        <EachStat>방어: {stats[2].base_stat}</EachStat>
      </Line>
      <Line>
        <EachStat>특공: {stats[3].base_stat}</EachStat>
        <EachStat>특방: {stats[4].base_stat}</EachStat>
        <EachStat>스피드: {stats[5].base_stat}</EachStat>
      </Line>
    </Stats>
  );
};

export default StatBox;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatTitle = styled.h2``;

const Line = styled.div`
  display: flex;
`;

const EachStat = styled.div``;
