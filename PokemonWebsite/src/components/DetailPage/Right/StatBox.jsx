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
      <StatTitle>
        종족값 : <Total>{total}</Total>
      </StatTitle>
      <Line>
        <EachStat $ishigh={stats[0].base_stat >= 110}>
          HP: {stats[0].base_stat}
        </EachStat>
        <EachStat $ishigh={stats[1].base_stat >= 110}>
          공격: {stats[1].base_stat}
        </EachStat>
        <EachStat $ishigh={stats[2].base_stat >= 110}>
          방어: {stats[2].base_stat}
        </EachStat>
      </Line>
      <Line>
        <EachStat $ishigh={stats[3].base_stat >= 110}>
          특공: {stats[3].base_stat}
        </EachStat>
        <EachStat $ishigh={stats[4].base_stat >= 110}>
          특방: {stats[4].base_stat}
        </EachStat>
        <EachStat $ishigh={stats[5].base_stat >= 110}>
          스피드: {stats[5].base_stat}
        </EachStat>
      </Line>
    </Stats>
  );
};

export default StatBox;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 150px;
  font-family: "maple";
  color: white;
`;

const StatTitle = styled.h2`
  font-size: 30px;
  display: flex;
  align-items: center;
  height: 50px;
`;

const Total = styled.p`
  color: yellow;
  margin-left: 10px;
`;

const Line = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const EachStat = styled.div`
  font-size: 25px;
  margin-right: 50px;
  color: ${(props) => (props.$ishigh ? "red" : "white")};
`;
