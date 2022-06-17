import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
import { format } from "date-fns";
import { BiSearchAlt } from "react-icons/bi";
import Table from "../../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePatient,
  getPatients,
  searchPatients,
} from "../../../redux/actions/patients";
import { useNavigate } from "react-router";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import { getTableHeaders } from "../../../commons/tableHeaders";

const PatientPreviewNurses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPatients());
  }, []);

  const patients = useSelector((state) => state.patients);
  const [value, setValue] = useState("");

  const linksHeader = {
    avatarUrl: "../nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Ana Reljić",
    userTitle: "Med sestra",
    day: format(new Date(), "d"),
    date: format(new Date(), "d MMMM, yyyy"),
  };

  const handleClick = (lbp) => {
    dispatch(deletePatient(lbp));
  };

  const handleEdit = (lbp) => {
    navigate(`/nurse/edit-patient/${lbp}`);
  };

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchPatients(value));
  }

  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("nurse", 2)} />
      </div>
      <div style={{ marginLeft: "20%" }}>
        <Header
          avatarUrl={linksHeader.avatarUrl}
          welcomeMsg={linksHeader.welcomeMsg}
          userName={linksHeader.userName}
          userTitle={linksHeader.userTitle}
          day={linksHeader.day}
          date={linksHeader.date}
        />
        <form className="example myInline">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={handleOnChange}
          />
          <button type="submit" onClick={handleSubmit}>
            <BiSearchAlt />
          </button>
        </form>
        <br />
        <br />
        <div>
          <h1 className="myTitle">Pacijenti</h1>
        </div>
        {patients.length > 0 && (
          <Table
            handleEdit={handleEdit}
            headers={getTableHeaders("patientPreview")}
            tableContent={patients}
            handleClick={handleClick}
            tableType="patients"
          />
        )}
        <br />
      </div>
    </div>
  );
};

export default PatientPreviewNurses;
