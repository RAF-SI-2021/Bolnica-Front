import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import GeneralStats from "../../components/GeneralStats/GeneralStats";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../redux/actions/appointment";
import ScheduledAppointments from "../../components/ScheduledAppointments/ScheduledAppointments";

const DoctorHomepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  const appointments = useSelector((state) => state.appointments);

  const sidebarProps = [
    {
      id: 1,
      text: "Pocetna",
      path: "/",
      icon: "fa-solid fa-chart-pie",
      isActive: true,
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
      image: "fa-solid fa-briefcase-medical",
      text: "Zakazani pregledi",
      number: "34",
    },
    {
      image: "fa-solid fa-person-cane",
      text: "Broj pacijenata",
      number: "10",
    },
  ];

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={sidebarProps} />
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
        </div>
        <ScheduledAppointments />
      </div>
    </>
  );
};

export default DoctorHomepage;
