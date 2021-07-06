import { useAuth } from "../../context/Auth";
import { authType } from "../../CostumType";
import { AuthButton } from "./AuthButton";
import Login from "./Login";

export function Auth() {
  let auth = useAuth() as authType;

  return (
    <>
      <div className="flex justify-center">
        <div
          className="h-96 bg-gradient-to-r from-green-400  to-green-800 w-4/5 rounded-xl transform rotate-6 absolute top-1/3 "
          style={{ zIndex: -1, position: "fixed" }}
        ></div>
      </div>
      <div className="flex justify-center">
        <div
          className="h-96 bg-gray-300 w-4/5 rounded-xl transform rotate-3  absolute top-1/3 "
          style={{ zIndex: -2, position: "fixed" }}
        ></div>
      </div>
      {auth.user ? <AuthButton /> : <Login />}
    </>
  );
}
