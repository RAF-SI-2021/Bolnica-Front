import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaChartPie, FaWheelchair, FaUser } from "react-icons/fa";
import { useLocation } from "react-router";
import { Button } from "reactstrap";
import "./styles.css";
import ExaminationForm from "../../components/ExaminationForm/ExaminationForm";
import MedicalRecord from "../../components/MedicalRecord/MedicalRecord";
import { useDispatch } from "react-redux";
import { getRecord } from "../../redux/actions/records";

const PatientExaminationPage = () => {
  const location = useLocation();
  const [patientId, setPatientId] = useState();
  const [isExamination, setIsExamination] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    setPatientId(pathParts[pathParts.length - 1]);
    dispatch(getRecord(pathParts[pathParts.length - 1]));
  }, []);

  if (patientId) console.log(patientId);

  const links = [
    {
      id: 1,
      text: "Pocetna",
      path: "/",
      icon: <FaChartPie />,
    },
    {
      id: 2,
      text: "Pacijenti",
      path: "/pacijenti",
      icon: <FaWheelchair />,
      dividerAfter: true,
    },
    {
      id: 3,
      text: "Profil",
      path: "/profil",
      icon: <FaUser />,
    },
  ];

  const swapTabs = () => {
    setIsExamination(!isExamination);
  };

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={links} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <Header
          avatarUrl={"nikolaSlika 1.jpg"}
          welcomeMsg={"Dobro jutro"}
          userName={"Dr. Paun"}
          userTitle={"Kardiolog"}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />
        <div className="tabButtons">
          <Button color="primary" outline={!isExamination} onClick={swapTabs}>
            Zdravstveni pregled
          </Button>
          <Button color="primary" outline={isExamination} onClick={swapTabs}>
            Zdravstveni karton
          </Button>
        </div>
        <div className="main">
          {isExamination ? <ExaminationForm /> : <MedicalRecord />}
        </div>
      </div>
    </>
  );
};

export default PatientExaminationPage;
