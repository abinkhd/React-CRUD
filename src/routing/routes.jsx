import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Home from "../component/Home";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    element: <PrivateRoutes />,
    children: [{ path: "/home", element: <Home /> }],
  },
]);

export default router;
