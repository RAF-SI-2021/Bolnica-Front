import React, { useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table/Table";
import { getTableHeaders } from "../../../commons/tableHeaders";
import { getNumberofAppointments } from "../../../redux/actions/numberOfAppointments";
import {
  searchLabVisits,
  updateLabVisits,
} from "../../../redux/actions/visits";
import { createVisit } from "../../../redux/actions/visits";
import { BiSearchAlt } from "react-icons/bi";
import { getLabReports } from "../../../redux/actions/labReports";
import { getPatients } from "../../../redux/actions/patients";
import { set } from "date-fns";
import { getUnprocessedReferrals } from "../../../redux/actions/referrals";

const VisitsPage = () => {
  const [isClicked1, setClicked1] = useState(true);
  const [isClicked2, setClicked2] = useState(false);
  const [isReport, setReport] = useState(false);
  const [form, setForm] = useState({});
  const [form2, setForm2] = useState({});
  const dispatch = useDispatch();
  const [isModal, setModal] = useState();
  const [isSearch, setSearch] = useState(false);
  const [value, setValue] = useState("");
  const patients = useSelector((state) => state.patients);
  const number = useSelector((state) => state.number);
  const referrals = useSelector((state) => state.referrals);
  const visits = useSelector((state) => state.visits);

  useEffect(() => {
    // dispatch(getLabReports());
    dispatch(getPatients());
  }, []);

  const toggleClass1 = () => {
    if (!isClicked1) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
  };

  const toggleClass2 = () => {
    if (!isClicked2) {
      setClicked2(!isClicked2);
      setClicked1(!isClicked1);
    }
  };

  const toggleReport = () => {
    if (isClicked1) setReport(!isReport);
  };

  const toggleSeach = () => {
    console.log(form2);
    dispatch(searchLabVisits(form2));
    if (isClicked2) setSearch(!isSearch);
  };

  // const toggleModal = () => {
  //   setModal(!isModal);
  // };

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValue(e.target.value);
  };

  const handleChangeArea = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChange = (e) =>
    setForm2({ ...form2, [e.target.name]: e.target.value });

  let formatted;
  const onChangeDateHandler = (e) => {
    const date = new Date(e.target.value);
    const years = date.toLocaleDateString("en-US", { year: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "numeric" });
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    formatted = years;
    formatted += month.length === 1 ? `-0${month}` : `-${month}`;
    formatted += day.length === 1 ? `-0${day}` : `-${day}`;
    setForm({
      ...form,
      date: formatted,
    });

    console.log({ ...form });
  };

  const onChangeDateHandler2 = (e) => {
    const date = new Date(e.target.value);
    const years = date.toLocaleDateString("en-US", { year: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "numeric" });
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    formatted = years;
    formatted += month.length === 1 ? `-0${month}` : `-${month}`;
    formatted += day.length === 1 ? `-0${day}` : `-${day}`;
    setForm2({
      ...form2,
      date: formatted,
    });

    console.log({ ...form2 });
  };

  const handlePatientChange = (event) => {
    setForm({ ...form, lbp: event.target.value });
    dispatch(getUnprocessedReferrals(event.target.value));
  };

  const handlePatientChange2 = (event) => {
    setForm2({ ...form2, lbp: event.target.value });
    // dispatch(getUnprocessedReferrals(event.target.value));
  };

  function handleScheduling(event) {
    event.preventDefault();
    console.log({ ...form });
    dispatch(createVisit({ ...form }));
  }

  function handleReports(event) {
    event.preventDefault();
    console.log({ value });
    dispatch(searchLabVisits({ value }));
  }

  let status;
  function handleButtonCanceled(entry) {
    dispatch(updateLabVisits({ id: entry[0][1], status: "OTKAZANO" }));
  }

  function handleButtonFinished(entry) {
    console.log("kliknuto2");
    status = "Zavrseno";
    dispatch(updateLabVisits(entry[0][1], { status }));
  }

  function handleNumberOfReports(event) {
    event.preventDefault();
    console.log(form.date);
    dispatch(getNumberofAppointments(form.date));
  }

  let currDate = new Date();
  function handleLabVisits(event) {
    event.preventDefault();
    if (form2.length > 0) dispatch(searchLabVisits({ ...form2 }));
    else dispatch(searchLabVisits({ currDate }));
  }

  const demoUnrealizedLabReports = [
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      datumRodjenja: "29.05.2020.",
      odeljenje: "ocno",
      spisakAnaliza: "spisakAnaliza",
      komentar: "komentar",
    },
    {
      id: 2,
      ime: "Marko",
      prezime: "Markovic",
      datumRodjenja: "29.05.2020.",
      odeljenje: "ocno",
      spisakAnaliza: "spisakAnaliza",
      komentar: "komentar",
    },
    {
      id: 3,
      ime: "Marko",
      prezime: "Markovic",
      datumRodjenja: "29.05.2020.",
      odeljenje: "ocno",
      spisakAnaliza: "spisakAnaliza",
      komentar: "komentar",
    },
  ];

  // if (isModal) {
  //   <ActionConformationModal
  //     title="Naslov"
  //     info="info"
  //     handleClick={handleEnd}
  //     id="myModal"
  //   />;
  // }
  let table;
  if (isReport) {
    table = (
      // {referrals.length === 0 && (
      <Table
        headers={getTableHeaders("unrealizedLabReferrals")}
        // tableContent={referrals}
        tableContent={demoUnrealizedLabReports}
      />
      // )};
    );
  } else {
    table = <div></div>;
  }
  console.log(visits);
  let table2;
  // if (isSearch) {
  if (visits.length > 0) {
    table2 = (
      // {visits.length === 0 && (
      <Table
        headers={getTableHeaders("scheduledVisits")}
        // tableContent={visits}
        tableContent={visits}
        tableType="searchVisits"
        handleButtonCanceled={handleButtonCanceled}
        handleButtonFinished={handleButtonFinished}
      />
      // )};
    );
  } else {
    table2 = <div></div>;
  }

  let forma;
  if (isClicked1) {
    forma = (
      <div>
        <form action="#" className="form-custom familyFix visits">
          <div className="form-group-custom">
            <select
              className="form-select-custom small-select margin-right"
              onChange={handlePatientChange}
              name="lbp"
              value={form.lbp}
              defaultValue=""
            >
              <option value="" disabled>
                Izaberite pacijenta
              </option>
              {patients.length > 0 ? (
                <>
                  {patients.map((patient) => {
                    return (
                      <option key={patient.lbp} value={patient.lbp}>
                        {patient.ime}
                      </option>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </select>
            <input
              type="date"
              data-date=""
              data-date-format="ddmmyyyy"
              name="date"
              onChange={onChangeDateHandler}
              className="margin-right margin-left"
            />
            <input
              type="text"
              placeholder="Broj zakazanih pacijenata"
              name="number"
              className="margin-left"
              value={number}
              disabled="disabled"
            />
          </div>
          <div className="form-group-custom">
            <textarea
              name="napomena"
              cols="50"
              onChange={handleChangeArea}
              placeholder="Napomena..."
            ></textarea>
          </div>
          <br></br>
          <br></br>
          <div className="form-group-custom">
            <button
              className="buttonForm"
              type="button"
              // data-bs-toggle="modal"
              // data-bs-target="#myModal"
              onClick={handleScheduling}
            >
              Zakaži
            </button>
          </div>
        </form>
        {table}
      </div>
    );
  }

  let forma2;
  if (isClicked2) {
    forma2 = (
      <div>
        <form className="form-custom familyFix visits">
          <div className="form-group-custom">
            <select
              className="form-select-custom small-select margin-right"
              onChange={handlePatientChange2}
              name="lbp"
              value={form2.lbp}
              defaultValue=""
            >
              <option value="" disabled>
                Izaberite pacijenta
              </option>
              {patients.length > 0 ? (
                <>
                  {patients.map((patient) => {
                    return (
                      <option key={patient.lbp} value={patient.lbp}>
                        {patient.ime}
                      </option>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </select>
            <div className="form-group-custom">
              <input
                type="date"
                data-date=""
                data-date-format="ddmmyyyy"
                name="date"
                onChange={onChangeDateHandler2}
                className="margin-right"
              />
              <button
                className="buttonForm"
                type="button"
                onClick={toggleSeach}
              >
                <BiSearchAlt />
              </button>
            </div>
          </div>
        </form>
        {table2}
      </div>
    );
  }

  return (
    <div>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("technician", 3)} />
      </div>
      <div style={{ marginLeft: "20%" }}>
        <ul className="nav nav-tabs nav-justified">
          <li className="nav-item">
            <button
              className={` ${isClicked1 ? "active" : "disabled"}`}
              onClick={toggleClass1}
            >
              Zakazivanje
            </button>
          </li>
          <li className="nav-item">
            <button
              className={` ${isClicked2 ? "active" : "disabled"}`}
              onClick={toggleClass2}
            >
              Pregled zakazanih poseta
            </button>
          </li>
        </ul>
        {forma}
        {forma2}
        {/* <ActionConformationModal
          title="Naslov"
          info="info"
          handleClick={handleEnd}
        /> */}
      </div>
    </div>
  );
};

export default VisitsPage;
