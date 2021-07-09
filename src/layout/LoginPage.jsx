import React from "react";
import { AuthButton } from "../components/auth/AuthButton";
import Nav from "../router/Nav";

const LoginPage = ({ children }) => {
  return (
    <div className="flex flex-col justify-center ">
      <br />
      <Nav />
      {children}
      <AuthButton />
    </div>
  );
};

export default LoginPage;
