import React from "react";
import "./Navbar.css";
import { FaCartPlus } from "react-icons/fa";
import { CartState } from "../context/Context";

export const Navbar = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="navbar">
      <ul>
        <li>
          <a href={""}>Home</a>
        </li>
        <li>
          <a href={""}>Services</a>
        </li>
        <li>
          <a href={""}>Contact</a>
        </li>
      </ul>

      <div className="cartIconGroup">
        <FaCartPlus className="cartIcon" />
        <span>{cart.length}</span>
      </div>
    </div>
  );
};
