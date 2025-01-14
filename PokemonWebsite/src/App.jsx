import SelectGeneration from "./components/SelectGeneration";
import Generation1 from "./components/Generations/Generation1";
import Generation2 from "./components/Generations/Generation2";
import Generation3 from "./components/Generations/Generation3";
import Generation4 from "./components/Generations/Generation4";
import NotFound from "./components/Notfound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectGeneration />,
    errorElement: <NotFound />,
  },
  {
    path: "/G1",
    element: <Generation1 />,
  },
  {
    path: "/G2",
    element: <Generation2 />,
  },
  {
    path: "/G3",
    element: <Generation3 />,
  },
  {
    path: "/G4",
    element: <Generation4 />,
  },
]);

function App() {
  return (
    <Screen>
      <Header />
      <RouterProvider router={router} />
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
