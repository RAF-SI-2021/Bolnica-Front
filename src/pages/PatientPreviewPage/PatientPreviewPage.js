import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaChartPie, FaUser, FaWheelchair } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
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
      text: "Profile",
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
      </div>
    </div>
  );
};
export default PatientPreview;
