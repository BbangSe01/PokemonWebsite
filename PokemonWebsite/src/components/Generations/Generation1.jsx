import React from "react";
import axios from "axios";
const Generation1 = () => {
  const G1Array = [];
  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
      const data = response.data; // 여기서 response.data가 실제 데이터
      G1Array.push(data);
      console.log(G1Array);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
  return <div></div>;
};

export default Generation1;
