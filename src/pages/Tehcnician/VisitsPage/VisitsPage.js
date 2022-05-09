import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import "./styles.css";
import { useState } from "react";

const VisitsPage = () => {
  const [isClicked1, setClicked1] = useState(true);
  const [isClicked2, setClicked2] = useState(false);

  const toggleClass1 = () => {
    if (!isClicked1) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
  };

  const toggleClass2 = () => {
    if (!isClicked2) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
  };

  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("technician", 3)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <button
              className={` ${isClicked1 ? "active" : "disabled"}`}
              onClick={toggleClass1}
            >
              Zakazivanje
            </button>
          </li>
          <li className="nav-item">
            <button
              className={` ${isClicked2 ? "active" : "disabled"}`}
              onClick={toggleClass2}
            >
              Pregled zakazanih poseta
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisitsPage;
