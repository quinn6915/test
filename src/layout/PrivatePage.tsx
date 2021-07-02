import React from "react";
import Nav from "../router/Nav";

type props = {
  children: React.ReactNode;
};

const PrivatePage: React.FC<props> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default PrivatePage;
