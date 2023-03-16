import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Sectors from "./pages/Sectors";
import Information from "./pages/Information";
import Ticket from "./pages/Ticket";
import SucessShop from "./pages/SucessShop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/experiencia",
    element: <Experience />,
  },
  {
    path: "/setores",
    element: <Sectors />,
  },
  {
    path: "/informacoes",
    element: <Information />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
  },
  {
    path: "/ingresso-comprado",
    element: <SucessShop />,
  },
]);
