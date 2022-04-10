import React from "react";

const MedicalRecord = () => {
  const dummyDate = new Date();
  const stringDate = dummyDate.toLocaleDateString();

  const alergies = ["polen", "macja dlaka", "mleko"];
  const vaccines = ["covid19", "tetanus"];

  return (
    <>
      <p className="form-section-heading">Osnovni zdravsteni podaci</p>
      <div>
        <div className="patient-info-custom">
          <div className="patient-personal-info">
            <p className="patient-info-text">Ime: Pacijent</p>
            <p className="patient-info-text">Prezime: Pacijentic</p>
            <p className="patient-info-text">Datum rodjena: {stringDate}</p>
            <p className="patient-info-text">
              Alergije: {alergies.map((alergy) => `${alergy} `)}
            </p>
          </div>
          <div className="patient-other-info">
            <p className="patient-info-text">Krvna grupa: AB</p>
            <p className="patient-info-text">RH faktor: +</p>
            <p className="patient-info-text">
              Vakcine: {vaccines.map((vaccine) => `${vaccine} `)}
            </p>
          </div>
        </div>
      </div>
      <p className="form-section-heading">Istorija lekarskih pregleda</p>
      <div>
        <div className="patient-info-custom">
          <div className="patient-personal-info">
            <p className="patient-info-text">Ime: Pacijent</p>
            <p className="patient-info-text">Prezime: Pacijentic</p>
            <p className="patient-info-text">Datum rodjena: {stringDate}</p>
          </div>
          <div className="patient-other-info">
            <p className="patient-info-text">Krvna grupa: AB</p>
            <p className="patient-info-text">RH faktor: +</p>
            <p className="patient-info-text">
              Alergije: {alergies.map((alergy) => `${alergy} `)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalRecord;
