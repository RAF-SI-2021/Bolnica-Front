import React, { useState } from "react";
import Table from "../Table/Table";
import { Button } from "reactstrap";

const MedicalRecord = () => {
  const dummyDate = new Date();
  const stringDate = dummyDate.toLocaleDateString();
  const [isExamination, setIsExamination] = useState(true);

  const alergies = ["polen", "macja dlaka", "mleko"];
  const vaccines = ["covid19", "tetanus"];

  const headers = ["Datum", "Objektivni nalaz"];
  const tableContent = [
    {
      dateToShow: new Date().toLocaleString(),
      objectiveFinding: "Objektivni nalaz doktora",
    },
    {
      dateToShow: new Date().toLocaleString(),
      objectiveFinding: "Objektivni nalaz doktora",
    },
    {
      dateToShow: new Date().toLocaleString(),
      objectiveFinding: "Objektivni nalaz doktora",
    },
  ];

  const headers2 = [
    "Dijagnoza",
    "Pocetak",
    "Zavrsetak",
    "Rezultat lecenja",
    "Tekuce stanje",
    "Validan od",
    "Validan do",
  ];
  const tableContent2 = [
    {
      diagnosis: "MKB10",
      start: new Date().toLocaleString(),
      end: new Date().toLocaleString(),
      result: "Izlecen",
      currentStatus: "Stanje je dobro",
      validFrom: new Date().toLocaleString(),
      validTo: new Date().toLocaleString(),
    },
    {
      diagnosis: "MKB10",
      start: new Date().toLocaleString(),
      end: new Date().toLocaleString(),
      result: "Izlecen",
      currentStatus: "Stanje je dobro",
      validFrom: new Date().toLocaleString(),
      validTo: new Date().toLocaleString(),
    },
    {
      diagnosis: "MKB10",
      start: new Date().toLocaleString(),
      end: new Date().toLocaleString(),
      result: "Izlecen",
      currentStatus: "Stanje je dobro",
      validFrom: new Date().toLocaleString(),
      validTo: new Date().toLocaleString(),
    },
    {
      diagnosis: "MKB10",
      start: new Date().toLocaleString(),
      end: new Date().toLocaleString(),
      result: "Izlecen",
      currentStatus: "Stanje je dobro",
      validFrom: new Date().toLocaleString(),
      validTo: new Date().toLocaleString(),
    },
  ];

  const handleClick = () => {
    console.log("Cao");
  };

  const swapTabs = () => {
    setIsExamination(!isExamination);
  };

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
      <p className="form-section-heading">
        {isExamination ? (
          <>
            Istorija lekarskih pregleda{" "}
            <Button
              color="primary"
              outline={!isExamination}
              onClick={swapTabs}
              style={{ marginLeft: "30px" }}
            >
              Istorija bolesti
            </Button>
          </>
        ) : (
          <>
            Istorija bolesti{" "}
            <Button
              color="primary"
              outline={isExamination}
              onClick={swapTabs}
              style={{ marginLeft: "30px" }}
            >
              Istorija pregleda
            </Button>
          </>
        )}
      </p>
      {isExamination ? (
        <Table
          headers={headers}
          tableContent={tableContent}
          handleClick={handleClick}
        />
      ) : (
        <Table
          headers={headers2}
          tableContent={tableContent2}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default MedicalRecord;
