import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const prop = ({ id, text, path, icon }) => (
  <li key={`prop-${id}`} className="nav-item">
    <Link to={path} className="nav-link">
      <i className={`${icon} customIcon`}></i>
      <label>{text}</label>
    </Link>
  </li>
);

const SidebarLink = ({ props }) => {
  return <div>{props.map(prop)}</div>;
};

export default SidebarLink;
