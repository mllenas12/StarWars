import { Navigate } from "react-router-dom";
import { selectUser } from "../features/userAuth/userSlice";
import { useAppSelector } from "../hooks/storeHooks";
export const ProtectedRoute = ({ children }: any) => {
  const userEmail = useAppSelector(selectUser).userEmail;
  if (!userEmail) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
