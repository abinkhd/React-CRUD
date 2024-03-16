import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Home from "../component/Home";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
]);

export default router;
