import { useUser } from "../features/authentication/useUser";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If NO authenticated user redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3. While loading, show spinner
  if (isLoading) {
    return <Loader />;
  }

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
