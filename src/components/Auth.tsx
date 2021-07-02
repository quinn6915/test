import { useAuth } from "../context/Auth";
import { authType } from "../CostumType";
import { AuthButton } from "./AuthButton";
import Login from "./Login";

export function Auth() {
  let auth = useAuth() as authType;

  return auth.user ? <AuthButton /> : <Login />;
}
