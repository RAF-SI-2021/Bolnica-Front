import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const prop = ({ id, text, path, icon, isActive, dividerAfter }) => (
  <li key={`prop-${id}`} className="nav-item">
    <Link to={path} className={`nav-link ${isActive ? "active-link" : ""}`}>
      <i className={`${icon} customIcon `}></i>
      <span>{text}</span>
    </Link>
    {dividerAfter ? (
      <div style={{ width: "100%", border: "1px solid black" }}></div>
    ) : (
      <></>
    )}
  </li>
);

const SidebarLink = ({ props }) => {
  return props.map(prop);
};

export default SidebarLink;
