import React from "react";
import SingleAppointment from "../SingleAppointment/SingleAppointment";
import "./styles.css";

const ScheduledAppointments = () => {
  const scheduledProps = [
    {
      id: 1,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Zakazano",
      time: 10000,
    },
    {
      id: 2,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Trenutno",
      time: 50656565,
    },
    {
      id: 3,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Otkazano",
      time: 50656565,
    },
    {
      id: 4,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Ceka",
      time: 50656565,
    },
    {
      id: 5,
      firstname: "Ime",
      lastname: "Prezime",
      dob: new Date(),
      gender: "Muski",
      appointmentStatus: "Zavrseno",
      time: 50656565,
    },
  ];
  return (
    <div>
      <div className="title">Današnji pacijenti</div>
      {scheduledProps.map((props) => {
        return <SingleAppointment props={props} key={props.id} />;
      })}
    </div>
  );
};

export default ScheduledAppointments;
