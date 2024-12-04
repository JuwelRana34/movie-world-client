import { useContext } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router";
import Loading from "../Pages/Loading";

// eslint-disable-next-line react/prop-types
function PrivetRoutes({ children }) {
  const { user, isLoading } = useContext(UserContext);
  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/Login" />;
  }
  return children;
}

export default PrivetRoutes;
