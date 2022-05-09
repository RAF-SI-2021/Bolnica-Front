import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import HeaderRight from "../../../components/HeaderRight/HeaderRight";
import Table from "../../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../../redux/actions/appointments";
import { getPatients } from "../../../redux/actions/patients";
import { resetUser } from "../../../redux/actions/auth";
import { useNavigate } from "react-router";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import { BiSearchAlt } from "react-icons/bi";
import "./styles.css";
import { getTableHeaders } from "../../../commons/tableHeaders";

const DoctorHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const patients = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(searchLabReports(value));
  }

  const handleClick = (lbp) => {
    // dispatch(deletePatient(lbp));
  };

  const handleEdit = (lbp) => {
    navigate(`/asdasd`);
  };

  const handleRowClick = (entry) => {
    console.log(entry);
    navigate(`/biochemist/detailed-view/${entry[0][1]}`);
  };

  const demoLabReports = [
    {
      id: 1,
      lbpPacijenta: "lbp-pacijenta",
      ime: "ime pacijaean",
      prezime: "prezime paricna",
    },
    {
      id: 2,
      lbpPacijenta: "lbp-pacijenta",
      ime: "ime pacijaean",
      prezime: "prezime paricna",
    },
    {
      id: 3,
      lbpPacijenta: "lbp-pacijenta",
      ime: "ime pacijaean",
      prezime: "prezime paricna",
    },
  ];

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("biochemist", 1)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <div className="flexRow padding-y-30">
          <form>
            <div className="flexRow">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                onChange={handleOnChange}
                className="fullWidth radius-left"
              />
              <button
                type="submit"
                className="radius-right buttonFix"
                onClick={handleSubmit}
              >
                <BiSearchAlt />
              </button>
            </div>
          </form>
          <HeaderRight userName="Jasda" userTitle="Alskcna" />
        </div>
        {/* {patients.length > 0 && ( */}
        <Table
          headers={getTableHeaders("labReportPreview")}
          tableContent={demoLabReports}
          handleClick={handleClick}
          handleEdit={handleEdit}
          handleRowClick={handleRowClick}
          tableType="patients"
        />
        {/* )} */}
      </div>
    </>
  );
};

export default DoctorHomepage;
