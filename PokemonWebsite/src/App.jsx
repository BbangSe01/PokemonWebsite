import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Router from "./routes/Router";

function App() {
  return (
    <Screen>
      {/*RouterProvider 사용 시, children을 사용하여 라우팅 설정해야 함.*/}
      <RouterProvider router={Router} />
    </Screen>
  );
}

export default App;

const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  // background-color: black;
  display: flex;
  flex-direction: column;
`;
