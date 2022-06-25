import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router";
import { Button } from "reactstrap";
import "./styles.css";
import ExaminationForm from "../../../components/ExaminationForm/ExaminationForm";
import MedicalRecord from "../../../components/MedicalRecord/MedicalRecord";
import { useDispatch, useSelector } from "react-redux";
import { createRecord, getRecord } from "../../../redux/actions/records";
import { getExaminations } from "../../../redux/actions/examinations";
import { getDiseases } from "../../../redux/actions/diseases";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import { getReferrals } from "../../../redux/actions/referrals";
import {
  updateAppointment,
  getAppointments,
} from "../../../redux/actions/appointments";
import { getLabReports } from "../../../redux/actions/labReports";
import CustomModalAnswer from "../../../components/CustomModalAnswer/CustomModalAnswer";
import CustomModal from "../../../components/CustomModal/CustomModal";

const PatientExamination = () => {
  const location = useLocation();
  const [lbp, setLbp] = useState();
  const [doctor, setDoctor] = useState();
  const [isExamination, setIsExamination] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const examinations = useSelector((state) => state.examinations);
  const appointments = useSelector((state) => state.appointments);
  const record = useSelector((state) => state.records[0]);
  const diseases = useSelector((state) => state.diseases);
  const referrals = useSelector((state) => state.referrals);
  const labReports = useSelector((state) => state.labReports);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const doctorLocal = JSON.parse(localStorage.getItem("loggedUser"));
    if (doctorLocal) {
      setDoctor(doctorLocal);
    } else navigate("/login");
    const pathParts = location.pathname.split("/");
    setLbp(pathParts[pathParts.length - 1]);
    dispatch(getRecord(pathParts[pathParts.length - 1]));
    dispatch(
      getDiseases(pathParts[pathParts.length - 1], { dijagnoza: "string" })
    );
    dispatch(getExaminations(pathParts[pathParts.length - 1]));
    dispatch(getReferrals(pathParts[pathParts.length - 1]));
    dispatch(getLabReports(pathParts[pathParts.length - 1]));
    dispatch(getAppointments(doctorLocal.LBZ));
  }, []);

  useEffect(() => {
    if (appointments.length > 0) {
      const currentAppointment = appointments.find(
        (appointment) => appointment.statusPregleda === "U_TOKU"
      );
      if (!currentAppointment) swapTabsForver();
      else {
        setIsExamination(true);
        setDisabled(false);
      }
    }
  }, [appointments]);

  const saveExamination = (formData) => {
    const currentAppointment = appointments.find(
      (appointment) => appointment.statusPregleda === "U_TOKU"
    );
    console.log(currentAppointment);
    console.log(appointments);
    dispatch(
      updateAppointment({
        appointmentId: currentAppointment.zakazaniPregledId,
        appointmentStatus: "ZAVRSENO",
      })
    );
    dispatch(
      createRecord({
        ...formData,
        lbp,
        lbz: doctor.LBZ,
        sadasnjaBolest: null,
      })
    );
    dispatch(getExaminations(lbp));
    swapTabsForver();
  };

  const swapTabs = () => {
    setIsExamination(!isExamination);
  };
  const swapTabsForver = () => {
    setIsExamination(false);
    setDisabled(true);
  };
  const toggleModalSuccess = () => setModalSuccess(!modalSuccess);
  const toggleModalError = () => setModalError(!modalError);

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("doctor", 0)} />
      </div>
      <div style={{ marginLeft: "20%" }}>
        <CustomModalAnswer
          title="Uspeh"
          content="Da li želite da završite pregled?"
          toggleModal={toggleModalSuccess}
          isOpen={modalSuccess}
          handleClick={saveExamination}
        />
        <CustomModal
          title="Greška"
          content="Doslo je do greške prilikom završavanja pregleda."
          toggleModal={toggleModalError}
          isOpen={modalError}
        />
        <Header
          avatarUrl={"nikolaSlika 1.jpg"}
          welcomeMsg={"Dobro jutro"}
          userName={"Dr. Paun"}
          userTitle={"Kardiolog"}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />
        {record && appointments && (
          <>
            <div className="tabButtons">
              <Button
                color="primary"
                outline={!isExamination}
                onClick={swapTabs}
                disabled={disabled}
              >
                Zdravstveni pregled
              </Button>
              <Button
                color="primary"
                outline={isExamination}
                onClick={swapTabs}
                disabled={disabled}
              >
                Zdravstveni karton
              </Button>
            </div>
            <div className="main">
              {record && record.pacijent && examinations && diseases ? (
                isExamination ? (
                  <ExaminationForm
                    saveExamination={saveExamination}
                    record={record}
                  />
                ) : (
                  <MedicalRecord
                    record={record}
                    diseases={diseases}
                    examinations={examinations}
                    referrals={referrals}
                    labReports={labReports}
                  />
                )
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PatientExamination;
