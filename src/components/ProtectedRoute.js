import { Navigate } from "react-router-dom";
import { isAuth } from "../utils/storage";

export default function ProtectedRoute({ children }) {
  return isAuth() ? children : <Navigate to="/" />;
}
