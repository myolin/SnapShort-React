import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authUser";

export default function PrivateRoute({children, publicPage}) {
  const { token } = useAuthStore();

  if (publicPage) {
    return token ? <Navigate to="/dashboard" /> : children
  }

  return !token ? <Navigate to="/login" /> : children;
}