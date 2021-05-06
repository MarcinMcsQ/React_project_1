import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

export const list = [
  { id: 0, name: "start", path: "/", exact: true },
  { id: 1, name: "produkty", path: "/products" },
  { id: 2, name: "kontakt", path: "/contact" },
  { id: 3, name: "panel admina", path: "/admin", class: "" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink
        id={item.id}
        to={item.path}
        className={item.class}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="mainNav">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
