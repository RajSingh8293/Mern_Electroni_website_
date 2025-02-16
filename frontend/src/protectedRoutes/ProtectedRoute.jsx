/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  // const user = JSON.parse(localStorage.getItem("user"))


  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [navigate, user, isAuthenticated]);
  return <>{children}</>;
};

export default PrivateRoute;

