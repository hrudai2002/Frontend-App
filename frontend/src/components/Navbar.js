import React from "react";
import { TbSquare, TbTriangleInverted } from "react-icons/tb";
import { BiCircle } from "react-icons/bi";
import { SiFampay } from "react-icons/si";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="not-bar">
        <div className="not-icons">
          <div className="icon icon-square">
            <TbSquare />
          </div>
          <div className="icon icon-circle">
            <BiCircle />
          </div>
          <div className="icon icon-triangle">
            <TbTriangleInverted />
          </div>
        </div>
      </div>
        <div className="company">
          <h1 className="title">fampay</h1>
          <div className="logo">
            <SiFampay />
          </div>
      </div>
    </>
  );
};

export default Navbar;
