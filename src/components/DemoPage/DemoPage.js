import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import SidebarLink from "../SidebarLink/SidebarLink";
import GeneralStats from "../GeneralStats/GeneralStats.js";
import Header from "../Header/Header";
import { format } from "date-fns";

const DemoPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="sidebar-link-container">
        <SidebarLink
          props={[
            {
              id: 1,
              text: "Pocetna",
              path: "/",
              icon: "fa-solid fa-chart-pie",
              isActive: true,
            },
            {
              id: 2,
              text: "Pacijenti",
              path: "/pacijenti",
              icon: "fa-solid fa-wheelchair",
            },
            {
              id: 3,
              text: "Profil",
              path: "/profil",
              icon: "fa-solid fa-user-doctor",
            },
          ]}
        />
      </div>

      <Header
        avatarUrl={"nikolaSlika 1.jpg"}
        welcomeMsg={"Dobro jutro"}
        userName={"Dr. Paun"}
        userTitle={"Kardiolog"}
        day={format(new Date(), "d")}
        date={format(new Date(), "d MMMM, yyyy")}
      />

      <div className="components">
        <GeneralStats
          image={"fa-solid fa-briefcase-medical"}
          text="Zakazani pregledi"
          number="34"
        />
        <GeneralStats
          image={"fa-solid fa-person-cane"}
          text="Broj pacijenata"
          number="10"
        />
      </div>
    </>
  );
};

export default DemoPage;
