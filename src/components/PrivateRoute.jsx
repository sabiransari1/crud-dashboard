import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let isAuth = useSelector((store) => store.authReducer.isAuth);
  let location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate state={location.pathname} to={"/login"} />
  );
};
