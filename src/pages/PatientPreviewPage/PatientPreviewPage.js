import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { BiSearchAlt } from "react-icons/bi";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarLinks } from "../../commons/sidebarLinks";
import {
  deletePatient,
  getPatients,
  searchPatients,
} from "../../redux/actions/patient";
import { useNavigate } from "react-router";
const PatientPreview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatients());
  }, []);

  const patients = useSelector((state) => state.patients);
  const [value, setValue] = useState("");

  const linksHeader = {
    avatarUrl: "../nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
    day: format(new Date(), "d"),
    date: format(new Date(), "d MMMM, yyyy"),
  };

  const headers = [
    {
      key: "ime",
      value: "Ime",
    },
    {
      key: "prezime",
      value: "Prezime",
    },
    {
      key: "kontaktTelefon",
      value: "Kontakt",
    },
    {
      key: "email",
      value: "Email",
    },
    {
      key: "zanimanje",
      value: "Zanimanje",
    },
    {
      key: "lbp",
      value: "LBP",
    },
  ];

  const handleClick = (lbp) => {
    dispatch(deletePatient(lbp));
  };

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchPatients(value));
  }

  const handleEdit = (lbp) => {
    navigate(`/edit-patient/${lbp}`);
  };

  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("doctor", 2)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
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
            headers={headers}
            tableContent={patients}
            handleClick={handleClick}
            handleEdit={handleEdit}
            tableType="patients"
          />
        )}
        <br />
      </div>
    </div>
  );
};
export default PatientPreview;
