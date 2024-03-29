import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const loggedIn = Cookies.get("UserLoggedIn");
  const token = Cookies.get("token")
  return loggedIn === "yes" && token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
