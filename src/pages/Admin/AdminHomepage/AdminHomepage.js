import React from "react";
import "./styles.css";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
import { format } from "date-fns";
import { getSidebarLinks } from "../../../commons/sidebarLinks";

const AdminHomepage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("admin", 1)} />
      </div>
      <div style={{ marginLeft: "20%" }}>
        <Header
          avatarUrl={"nikolaSlika 1.jpg"}
          welcomeMsg={"Dobro jutro"}
          userName={"Dr. Paun"}
          userTitle={"Kardiolog"}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />
      </div>
    </>
  );
};

export default AdminHomepage;
