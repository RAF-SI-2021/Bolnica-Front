import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReferrals } from "../../../redux/actions/referrals";
import { createLabReport } from "../../../redux/actions/labReports";
import {
  searchLabVisits,
  updateLabVisits,
} from "../../../redux/actions/visits";
import Table from "../../../components/Table/Table";
import { getTableHeaders } from "../../../commons/tableHeaders";
import CustomModal from "../../../components/CustomModal/CustomModal";
import ActionConfirmationModal from "../../../components/ActionConfirmationModal/ActionConfirmationModal";
import { useEffect } from "react";

const initialStateFormLbp2 = {
  lbpForm2: "",
};

const initialStateFormLbp1 = {
  lbpForm1: "",
};
const AdmissionPage = () => {
  const handleRowClick = (entry) => {};

  let tab;
  let labRep;
  let dateValue = new Date();

  const referrals = useSelector((state) => state.referrals);

  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const [formLbp2, setFormLbp2] = useState(initialStateFormLbp2);
  const [formLbp1, setFormLbp1] = useState(initialStateFormLbp1);
  const [valueLbp2, setValueLbp2] = useState();
  const [valueLbp1, setValueLbp1] = useState();

  const [isClicked1, setClicked1] = useState(true);
  const [isClicked2, setClicked2] = useState(false);

  useEffect(() => {
    dispatch(searchLabVisits(dateValue));
  }, []);

  const visits = useSelector((state) => state.visits);

  const toggleClass1 = () => {
    if (!isClicked1) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
    setValueLbp1("");
    setDisable(true);
  };

  const toggleClass2 = () => {
    setValueLbp2("");
    if (!isClicked2) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
    setDisable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getReferrals({ ...formLbp2 }));
  };

  const handleChange = (e) => {
    setFormLbp2({ ...formLbp2, [e.target.name]: e.target.value });
    setValueLbp2(e.target.value);
    setDisable(e.target.value === "");
  };

  const handleChangeLbp = (e) => {
    setFormLbp1({ ...formLbp1, [e.target.name]: e.target.value });
    setDisable(e.target.value === "");
    dispatch(searchLabVisits({ ...formLbp1 }, dateValue));
    setValueLbp1(e.target.value);
    setValueLbp2("");
  };

  const handlecreateLabReport = (key, entry) => {
    dispatch(createLabReport(entry[0][1]));
  };

  const handleCancelVisit = (key, entry) => {
    dispatch(updateLabVisits(entry[0][1], "Otkazano"));
  };

  const handleCreateLabReportTab1 = (key, entry) => {
    dispatch(updateLabVisits(entry[0][1], "Zavrseno"));
    setClicked2(true);
    setClicked1(false);
    setValueLbp2(entry[1][1]);
    setDisable(false);
  };

  const demoUnrealizedLabReferrals = [
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      datum: new Date("December 30, 2018 17:30:00").getTime(),
      odeljenje: "XX",
      spisakAnaliza: "spisak",
      komentar: "komentar",
      kreiraj: "a",
    },
    {
      id: 2,
      ime: "Petar",
      prezime: "Markovic",
      datum: new Date("May 10, 2022 17:30:00").getTime(),
      odeljenje: "YY",
      spisakAnaliza: "spisakAnaliza",
      komentar: "koment",
      kreiraj: "a",
    },
    {
      id: 3,
      ime: "Mile",
      prezime: "Miletic",
      datum: new Date("May 25, 2022 10:30:00").getTime(),
      odeljenje: "ZZ",
      spisakAnaliza: "spisakAnaliza",
      komentar: "koment",
      kreiraj: "a",
    },
  ];

  const demoLabVisits = [
    {
      id: 1,
      lbpPacijenta: 1234,
      lbzTehnicara: 321,
      napomena: "napomena",
      datumPregleda: new Date("December 30, 2019 17:30:00").getTime(),
      statusPregledaZakazaniPacijenti: "Zakazano",
    },
    {
      id: 2,
      lbpPacijenta: 456,
      lbzTehnicara: 78910,
      napomena: "nap",
      datumPregleda: new Date("December 30, 2018 17:30:00").getTime(),
      statusPregledaZakazaniPacijenti: "YY",
    },
  ];

  /*   if (true) {
    labRep = (
      <Table
        headers={getTableHeaders("unrealizedLabReferrals")}
        tableContent={referrals}
        handleClick={handleClick}
        tableType="labReferrals"
      />
    );
  } else {
    labRep = (
      <div>
        <CustomModal
          title="Greska"
          info="Lista neobradjenih uputa je prazna"
          isSuccess={false}
          id="false"
        />
      </div>
    );
  } */

  if (isClicked1) {
    tab = (
      <div>
        <form className="form-custom familyFix">
          <br></br>
          <div className="form-group-custom">
            <input
              className="margin-right"
              placeholder="LBP"
              onChange={handleChangeLbp}
              name="lbpForm1"
              type="text"
              value={valueLbp1}
            />
          </div>
        </form>
        <Table
          headers={getTableHeaders("labVisits")}
          tableContent={demoLabVisits}
          /*              tableContent={visits}
           */
          handleRowClick={handleRowClick}
          handleCancelVisit={handleCancelVisit}
          handleCreateLabReportTab1={handleCreateLabReportTab1}
        />
      </div>
    );
  } else {
    tab = (
      <div>
        <form onSubmit={handleSubmit} className="form-custom familyFix">
          <br></br>
          <div className="form-group-custom">
            <input
              className="margin-right"
              placeholder="LBP"
              onChange={handleChange}
              name="lbpForm2"
              type="text"
              value={valueLbp2}
            />
            <button
              disabled={disable}
              onClick={handleSubmit}
              className={` ${disable ? "disabled" : ""}`}
              type="button"
            >
              Pretrazi
            </button>
          </div>
        </form>

        {/*  {labRep} */}

        {/*         {referrals.length > 0 && ( */}
        {demoUnrealizedLabReferrals.length > 0 && (
          <Table
            headers={getTableHeaders("unrealizedLabReferrals")}
            tableContent={demoUnrealizedLabReferrals}
            /*              tableContent={referrals}
             */
            handlecreateLabReport={handlecreateLabReport}
            handleRowClick={handleRowClick}
          />
        )}

        {/*         {referrals.length === 0 && ( */}
        {demoUnrealizedLabReferrals.length === 0 && (
          <div>
            <CustomModal
              title="Greska"
              info="Lista neobradjenih uputa je prazna"
              isSuccess={false}
              id="false"
            />
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <Sidebar links={getSidebarLinks("technician", 2)} />

      <div style={{ marginLeft: "15%" }}>
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <button
              className={` ${isClicked1 ? "isActive" : "inactive"}`}
              onClick={toggleClass1}
            >
              Zakazani pacijenti
            </button>
          </li>
          <li className="nav-item">
            <button
              className={` ${isClicked2 ? "isActive" : "inactive"}`}
              onClick={toggleClass2}
            >
              Kreiranje radnog naloga
            </button>
          </li>
        </ul>
        {tab}
      </div>
    </div>
  );
};

export default AdmissionPage;
