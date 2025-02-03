import { createBrowserRouter, Outlet } from "react-router-dom";
import SelectGeneration from "../components/SelectGeneration";
import Generation1 from "../components/Generations/Generation1";
import Generation2 from "../components/Generations/Generation2";
import Generation3 from "../components/Generations/Generation3";
import Generation4 from "../components/Generations/Generation4";
import NotFound from "../components/Notfound";
import Temp1 from "../components/Temporary1";
import Temp2 from "../components/Temporary2";
import Header from "../components/Header";
import DetailPage from "../components/DetailPage/DetailPage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <SelectGeneration /> },
      { path: "/G1", element: <Generation1 /> },
      { path: "/G2", element: <Generation2 /> },
      { path: "/G3", element: <Generation3 /> },
      { path: "/G4", element: <Generation4 /> },
      { path: "/Temp1", element: <Temp1 /> },
      { path: "/Temp2", element: <Temp2 /> },
      { path: "*", element: <NotFound /> },
      { path: "/DetailPage", element: <DetailPage /> },
    ],
  },
]);

export default Router;
