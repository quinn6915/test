import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../router/Nav";
import { gradient, gradientGray } from "../css/gradient";

type props = {
  children: React.ReactNode;
};

const PrivatePage: React.FC<props> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <div>
        {location.pathname !== "/" && (
          <div className="sticky top-24 2xl:top-16" style={{ zIndex: -1 }}>
            <div className="flex justify-center">
              <div
                className={`h-96 w-4/5 rounded-3xl transform absolute top-16 2xl:top-28 ${gradient(
                  location.pathname
                )}`}
              ></div>
            </div>
            <div className="flex justify-center">
              <div
                className={`h-96 bg-gray-300 w-4/5 rounded-3xl transform absolute top-16 2xl:top-28 ${gradientGray(
                  location.pathname
                )}`}
                style={{ zIndex: -2 }}
              ></div>
            </div>
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default PrivatePage;
