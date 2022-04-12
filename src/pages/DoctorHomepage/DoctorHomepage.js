import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import GeneralStats from "../../components/GeneralStats/GeneralStats";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../redux/actions/appointment";
import { getPatients } from "../../redux/actions/patient";
import ScheduledAppointments from "../../components/ScheduledAppointments/ScheduledAppointments";
import { FaHome, FaUser, FaUserInjured } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { GiMedicalDrip, GiMedicalPack } from "react-icons/gi";
import { resetUser } from "../../redux/actions/auth";
import { useNavigate } from "react-router";

const DoctorHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const doctor = useSelector((state) => state.loggedUser);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const doctor = JSON.parse(localStorage.getItem("loggedUser"));
      console.log(doctor);
      dispatch(resetUser());
      dispatch(getAppointments(doctor.LBZ));
      dispatch(getPatients());
    } else navigate("/login");
  }, []);

  const appointments = useSelector((state) => state.appointments);
  const patients = useSelector((state) => state.patients);

  console.log(patients);

  const links = [
    {
      id: 1,
      text: "Početna",
      path: "/",
      icon: <FaHome />,

      isActive: true,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/patient-preview",
      icon: <FaUserInjured />,
    },
    {
      id: 3,
      text: "Zakazani pregledi",
      path: "/appointments",
      icon: <MdCalendarToday />,
      dividerAfter: true,
    },
    {
      id: 4,
      text: "Profil",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

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
        <Sidebar links={links} />
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

        <div className="components">
          <GeneralStats
            image={generalStatsProps[0].image}
            text={generalStatsProps[0].text}
            number={generalStatsProps[0].number}
          />
          <GeneralStats
            image={generalStatsProps[1].image}
            text={generalStatsProps[1].text}
            number={generalStatsProps[1].number}
          />
          <GeneralStats
            image={generalStatsProps[2].image}
            text={generalStatsProps[2].text}
            number={generalStatsProps[2].number}
          />
        </div>
        {appointments && patients && (
          <ScheduledAppointments
            appointments={appointments}
            patients={patients}
          />
        )}
      </div>
    </>
  );
};

export default DoctorHomepage;
