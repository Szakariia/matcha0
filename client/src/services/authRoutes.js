import { Navigate } from "react-router-dom";
import authlocalStorage from "../Auth";

function PrivateRoute({ children }) {
  const auth = authlocalStorage();
  // check the Auth user
  return auth ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
