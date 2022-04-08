import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaChartPie, FaUser, FaWheelchair } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import Table from "../../components/Table/Table";

const PatientPreview = () => {
  const linksSidebar = [
    {
      id: 1,
      text: "Početna",
      path: "/",
      icon: <FaChartPie />,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/patient-preview",
      icon: <FaWheelchair />,
      dividerAfter: true,
      isActive: true,
    },
    // {
    //   id: 3,
    //   text: "Zakazani pregledi",
    //   path: "/",
    //   icon: <MdCalendarToday />,
    //   dividerAfter: true,
    // },
    {
      id: 4,
      text: "Profil",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  const linksHeader = {
    avatarUrl: "../nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
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
          <h1 className="myTitle">Zaposleni</h1>
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
export default PatientPreview;
