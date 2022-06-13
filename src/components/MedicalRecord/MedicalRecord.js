import React, { useState } from "react";
import Table from "../Table/Table";
import { Button } from "reactstrap";
import { getTableHeaders } from "../../commons/tableHeaders";

const MedicalRecord = ({
  record,
  diseases,
  examinations,
  referrals,
  labReports,
}) => {
  const dob = new Date(record.pacijent.datumRodjenja);
  const stringDate = dob.toLocaleDateString();
  const [isExamination, setIsExamination] = useState(true);
  const [isRefferal, setIsRefferal] = useState(true);

  const alergies = ["polen", "macja dlaka", "mleko"];
  const vaccines = ["covid19", "tetanus"];

  const handleClick = () => {
    console.log("Cao");
  };

  const swapTabs = () => {
    setIsExamination(!isExamination);
  };
  const swapTabsRefferal = () => {
    setIsRefferal(!isRefferal);
  };

  return (
    <>
      <p className="form-section-heading">Osnovni zdravsteni podaci</p>
      <div>
        <div className="patient-info-custom">
          <div className="patient-personal-info">
            <p className="patient-info-text">Ime: {record.pacijent.ime}</p>
            <p className="patient-info-text">
              Prezime: {record.pacijent.prezime}
            </p>
            <p className="patient-info-text">Datum rodjena: {stringDate}</p>
            <p className="patient-info-text">
              Alergije: {alergies.map((alergy) => `${alergy} `)}
            </p>
          </div>
          <div className="patient-other-info">
            <p className="patient-info-text">
              Krvna grupa: {record.krvnaGrupa}
            </p>
            <p className="patient-info-text">RH faktor: {record.rhFaktor}</p>
            <p className="patient-info-text">
              Vakcine: {vaccines.map((vaccine) => `${vaccine} `)}
            </p>
          </div>
        </div>
      </div>
      {isExamination && examinations.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija lekarskih pregleda{" "}
            {diseases.length > 0 && (
              <Button
                color="primary"
                outline={!isExamination}
                onClick={swapTabs}
                style={{ marginLeft: "30px" }}
              >
                Istorija bolesti
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("examinationHistory")}
            tableContent={examinations}
            handleClick={handleClick}
            tableType="examinations"
          />
        </>
      ) : diseases.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija bolesti{" "}
            {examinations.length > 0 && (
              <Button
                color="primary"
                outline={isExamination}
                onClick={swapTabs}
                style={{ marginLeft: "30px" }}
              >
                Istorija pregleda
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("diseaseHistory")}
            tableContent={diseases}
            handleClick={handleClick}
            tableType="diseases"
          />
        </>
      ) : (
        <p className="form-section-heading">
          Trenutno ne postoji istorija pregleda i bolesti
        </p>
      )}
      {isRefferal && referrals.length > 0 ? (
        <>
          <p className="form-section-heading" style={{ marginTop: "40px" }}>
            Istorija uputa{" "}
            {labReports.length > 0 && (
              <Button
                color="primary"
                outline={!isRefferal}
                onClick={swapTabsRefferal}
                style={{ marginLeft: "30px" }}
              >
                Istorija bolesti
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("examinationHistory")}
            tableContent={referrals}
            handleClick={handleClick}
            tableType="referrals"
          />
        </>
      ) : labReports.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija laboratorijskih izvestaja{" "}
            {referrals.length > 0 && (
              <Button
                color="primary"
                outline={isRefferal}
                onClick={swapTabsRefferal}
                style={{ marginLeft: "30px" }}
              >
                Istorija pregleda
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("diseaseHistory")}
            tableContent={labReports}
            handleClick={handleClick}
            tableType="labReports"
          />
        </>
      ) : (
        <p className="form-section-heading">
          Trenutno ne postoji istorija uputa i laboratorijskih izvestaja
        </p>
      )}
    </>
  );
};

export default MedicalRecord;
