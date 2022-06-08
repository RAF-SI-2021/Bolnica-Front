import { formatRFC7231 } from "date-fns";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { fetchPatientsHistory } from "../../../api";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import { getTableHeaders } from "../../../commons/tableHeaders";
import History from "../../../components/PatientsOfTheDepartment/History";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Table from "../../../components/Table/Table";

const NurseInfirmaryPatientsOfTheDepartmentHistory = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [isTab1, setTab1] = useState(true);
  const [isTab2, setTab2] = useState(false);
  const [isTab3, setTab3] = useState(false);
  const [isTab4, setTab4] = useState(false);

  const [lbp, setLbp] = useState("");
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [jmbg, setJmbg] = useState("");

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const values = pathParts[pathParts.length - 1];
    const perm = values.split(",");
    setLbp(perm[1]);
    setIme(perm[3]);
    setPrezime(perm[5]);
    setJmbg(perm[7]);
    // dispatch(getEmployee(pathParts[pathParts.length - 1]));
  }, []);

  const toggleClass1 = () => {
    if (!isTab1) {
      setTab1(!isTab1);
      if (isTab2) setTab2(!isTab2);
      else if (isTab3) setTab3(!isTab3);
      else if (isTab4) setTab4(!isTab4);
    }
  };

  const toggleClass2 = () => {
    if (!isTab2) {
      setTab2(!isTab2);

      if (isTab1) setTab1(!isTab1);
      else if (isTab3) setTab3(!isTab3);
      else if (isTab4) setTab4(!isTab4);
    }
  };

  const toggleClass3 = () => {
    if (!isTab3) {
      setTab3(!isTab3);
      if (isTab2) setTab2(!isTab2);
      else if (isTab1) setTab1(!isTab1);
      else if (isTab4) setTab4(!isTab4);
    }
  };

  const toggleClass4 = () => {
    if (!isTab4) {
      setTab4(!isTab4);
      if (isTab2) setTab2(!isTab2);
      else if (isTab3) setTab3(!isTab3);
      else if (isTab1) setTab1(!isTab1);
    }
  };

  let history;
  if (isTab1) {
    history = <History lbp={lbp} toggleClass2={toggleClass2} />;
  }

  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("nurseinfirmary", 7)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <button
              className={` ${isTab1 ? "active" : "disabled"}`}
              onClick={toggleClass1}
            >
              Istorija stanja
            </button>
          </li>
          <li className="nav-item">
            <button
              className={` ${isTab2 ? "active" : "disabled"}`}
              onClick={toggleClass2}
            >
              Registrovanje stanja
            </button>
          </li>
          <li className="nav-item">
            <button
              className={` ${isTab3 ? "active" : "disabled"}`}
              onClick={toggleClass3}
            >
              Istorija poseta
            </button>
          </li>
          <li className="nav-item">
            <button
              className={` ${isTab4 ? "active" : "disabled"}`}
              onClick={toggleClass4}
            >
              Registracija posete
            </button>
          </li>
        </ul>
        <br></br>
        <br></br>
        <form className="form-custom familyFix">
          <br></br>
          <div className="form-group-custom">
            <input
              type="text"
              className="margin-right"
              name="LBP"
              value={lbp}
              disabled
            />

            <input
              type="text"
              className="margin-right"
              name="ime"
              value={ime}
              disabled
            />

            <input
              type="text"
              className="margin-right"
              name="Prezime"
              value={prezime}
              disabled
            />

            <input
              type="text"
              className="margin-left"
              name="jmbg"
              value={jmbg}
              disabled
            />
          </div>
        </form>
        {history}
      </div>
    </div>
  );
};

export default NurseInfirmaryPatientsOfTheDepartmentHistory;
