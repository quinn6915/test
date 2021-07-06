import React from "react";
import { AuthButton } from "../components/auth/AuthButton";
import Nav from "../router/Nav";

type props = {
  children: React.ReactNode;
};

const LoginPage: React.FC<props> = ({ children }) => {
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
