import React from "react";
import { FaChartPie, FaWheelchair, FaUser } from "react-icons/fa";
import { GiMedicalPack } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderNurse from "../../components/HeaderNurse/HeaderNurse";
import ScheduledAppointmentsNurse from "../../components/ScheduledAppointmentsNurse/ScheduledAppointmentsNurse";

const NurseHomepage = () => {
  const sidebarProps = [
    {
      id: 1,
      text: "Početna",
      path: "/nurse",
      icon: <FaChartPie />,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/patient-preview",
      icon: <FaWheelchair />,
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
      isActive: true,
      dividerAfter: true,
    },
    {
      id: 6,
      text: "Profil",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  const headerProps = {
    userName: "Ana Reljic",
    userTitle: "Med sestra",
  };

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={sidebarProps} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <HeaderNurse
          userName={headerProps.userName}
          userTitle={headerProps.userTitle}
        />
        <ScheduledAppointmentsNurse />
      </div>
    </>
  );
};

export default NurseHomepage;
