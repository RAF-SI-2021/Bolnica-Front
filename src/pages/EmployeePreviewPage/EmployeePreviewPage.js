import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";

const EmployeePreview = () => {
  const linksSidebar = [
    {
      id: 1,
      text: "Pocetna",
      path: "/",
      icon: "fa-solid fa-chart-pie",
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/pacijenti",
      icon: "fa-solid fa-wheelchair",
      dividerAfter: true,
    },
    {
      id: 3,
      text: "Profil",
      path: "/profil",
      icon: "fa-solid fa-user-doctor",
      isActive: true,
    },
  ];

  const linksHeader = {
    avatarUrl: "nikolaSlika 1.jpg",
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

export default EmployeePreview;
