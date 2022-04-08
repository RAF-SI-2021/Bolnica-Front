import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaChartPie, FaUser, FaWheelchair } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import Table from "../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { GiMedicalPack } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";

const PatientPreviewNurses = () => {
  const linksSidebar = [
    {
      id: 1,
      text: "Početna",
      path: "/nurse",
      icon: <FaChartPie />,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/nurse/patient-preview",
      icon: <FaWheelchair />,
      isActive: true,
    },
    {
      id: 3,
      text: "Zakazivanje pregleda",
      path: "/zakazivanje",
      icon: <GiMedicalPack />,
    },
    {
      id: 4,
      text: "Dodavanje pacijenta",
      path: "/dodavanjepcijenta",
      icon: <IoPersonAddSharp />,
    },
    {
      id: 5,
      text: "Zakazani pacijenti",
      path: "/zakazanipacijenti",
      icon: <MdCalendarToday />,
      dividerAfter: true,
    },
    {
      id: 6,
      text: "Profil",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  const linksHeader = {
    avatarUrl: "../nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Ana Reljić",
    userTitle: "Med sestra",
    day: format(new Date(), "d"),
    date: format(new Date(), "d MMMM, yyyy"),
  };

  const headers = ["Name", "Surname", "Address", "City", "Contact"];

  const tableContent = [
    {
      name: "Marija",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Marko",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
    {
      name: "Dejan",
      surname: "Markovic",
      address: "Kursulina 49",
      city: "Beograd",
      contact: "0601234567",
    },
  ];
  const handleClick = (id) => {
    console.log("I have been clicked");
  };
  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={linksSidebar} />
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
        <div>
          <h1 className="myTitle">Pacijenti</h1>
        </div>
        <Table
          headers={headers}
          tableContent={tableContent}
          handleClick={handleClick}
        />
        <br />
      </div>
    </div>
  );
};

export default PatientPreviewNurses;
