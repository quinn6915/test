import React from "react";
import Nav from "../router/Nav";

type props = {
  children: React.ReactNode;
};

const PrivatePage: React.FC<props> = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <div className="sticky top-12" style={{ zIndex: -1 }}>
          <div className="flex justify-center">
            <div className="h-96 bg-gradient-to-br from-yellow-400  to-yellow-800 w-4/5 rounded-3xl transform -rotate-6 absolute mt-16"></div>
          </div>
          <div className="flex justify-center">
            <div
              className="h-96 bg-gray-300 w-4/5 rounded-3xl transform -rotate-3 absolute mt-16"
              style={{ zIndex: -2 }}
            ></div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default PrivatePage;
