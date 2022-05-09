import React, { useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
import GeneralStats from "../../../components/GeneralStats/GeneralStats";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../../redux/actions/appointments";
import { getPatients } from "../../../redux/actions/patients";
import ScheduledAppointments from "../../../components/ScheduledAppointments/ScheduledAppointments";
import { FaUserInjured } from "react-icons/fa";
import { GiMedicalDrip, GiMedicalPack } from "react-icons/gi";
import { resetUser } from "../../../redux/actions/auth";
import { useNavigate } from "react-router";
import { getSidebarLinks } from "../../../commons/sidebarLinks";

const DoctorHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const appointments = useSelector((state) => state.appointments);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const doctor = JSON.parse(localStorage.getItem("loggedUser"));
      dispatch(resetUser());
      dispatch(getAppointments(doctor.LBZ));
      dispatch(getPatients());
    } else navigate("/login");
  }, []);

  const headerProps = {
    avatarUrl: "nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
  };

  const generalStatsProps = [
    {
      image: <GiMedicalPack size="45px" />,
      text: "Zakazani pregledi",
      number: "34",
    },
    {
      image: <FaUserInjured size="45px" />,
      text: "Broj pacijenata",
      number: "10",
    },
    {
      image: <GiMedicalDrip size="45px" />,
      text: "Operacije",
      number: "10",
    },
  ];

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("biochemist", 1)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <Header
          avatarUrl={headerProps.avatarUrl}
          welcomeMsg={headerProps.welcomeMsg}
          userName={headerProps.userName}
          userTitle={headerProps.userTitle}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />
      </div>
    </>
  );
};

export default DoctorHomepage;
