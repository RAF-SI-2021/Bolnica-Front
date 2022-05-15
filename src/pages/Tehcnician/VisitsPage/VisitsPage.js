import React from "react";
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

const VisitsPage = () => {
  const [isClicked1, setClicked1] = useState(true);
  const [isClicked2, setClicked2] = useState(false);
  const [isReport, setReport] = useState(false);
  const [form, setForm] = useState();
  const [form2, setForm2] = useState();
  const dispatch = useDispatch();
  const [isModal, setModal] = useState();
  const [isSearch, setSearch] = useState(false);
  const [value, setValue] = useState("");

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
      dob: formatted,
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
      dob: formatted,
    });

    console.log({ ...form2 });
  };

  function hadleScheduling(event) {
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
    console.log("kliknuto");
    status = "Otkazano";
    dispatch(updateLabVisits(entry[0][1], { status }));
  }

  function handleButtonFinished(entry) {
    console.log("kliknuto2");
    status = "Zavrseno";
    dispatch(updateLabVisits(entry[0][1], { status }));
  }

  function handleNumberOfReports(event) {
    event.preventDefault();
    console.log(form.dob);
    dispatch(getNumberofAppointments(form.dob));
  }

  let currDate = new Date();
  function handleLabVisits(event) {
    event.preventDefault();
    if (form2.length > 0) dispatch(searchLabVisits({ ...form2 }));
    else dispatch(searchLabVisits({ currDate }));
  }

  const number = useSelector((state) => state.number);
  const referrals = useSelector((state) => state.referrals);
  const visits = useSelector((state) => state.visits);

  const demoSearchVisits = [
    {
      id: 1,
      lbpPacijenta: 1234,
      lbzTehnicara: "klm",
      napomena: "nesto",
      datumPregleda: new Date().getTime(),
      statusPregleda: "Zakazano",
    },
    {
      id: 2,
      lbpPacijenta: 1234,
      lbzTehnicara: "klm",
      napomena: "nesto",
      datumPregleda: new Date().getTime(),
      statusPregleda: "Zavrseno",
    },
    {
      id: 3,
      lbpPacijenta: 1234,
      lbzTehnicara: "klm",
      napomena: "nesto",
      datumPregleda: new Date().getTime(),
      statusPregleda: "Otkazano",
    },
  ];

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

  let table2;
  if (isSearch) {
    table2 = (
      // {visits.length === 0 && (
      <Table
        headers={getTableHeaders("scheduledVisits")}
        // tableContent={visits}
        tableContent={demoSearchVisits}
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
            <input
              className="margin-right"
              placeholder="LBP"
              name="lbp"
              type="text"
              onChange={handleChangeInput}
              value={value}
              required
            />

            <button
              className={` ${!value ? "buttonFormDisabled" : "buttonForm"}`}
              type="button"
              disabled={!value}
              onClick={toggleReport}
            >
              {/* <button
              className="buttonForm"
              type="button"
              disabled={!value}
              onClick={handleReports}
            > */}
              Dohvati
            </button>
          </div>
          <br></br>
          <div className="form-group-custom">
            <input
              type="date"
              data-date=""
              data-date-format="ddmmyyyy"
              name="dob"
              onChange={onChangeDateHandler}
              className="margin-right"
            />
            <input
              type="text"
              placeholder="Broj zakazanih pacijenata"
              name="number"
              className="margin-left margin-right"
              value={number}
              disabled="disabled"
            />
            <button
              className="buttonForm"
              type="button"
              onClick={handleNumberOfReports}
            >
              Dohvati
            </button>
          </div>
          <br></br>
          <div className="form-group-custom">
            <textarea
              name="description"
              rows="4"
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
              onClick={hadleScheduling}
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
            <input
              className="margin-right"
              placeholder="LBP"
              name="lbp"
              type="text"
              onChange={handleChange}
            />
            <div className="form-group-custom">
              <input
                type="date"
                data-date=""
                data-date-format="ddmmyyyy"
                name="dob"
                onChange={onChangeDateHandler2}
                className="margin-right"
              />
              <button
                className="buttonForm"
                type="button"
                onClick={toggleSeach}
              >
                {/* <button
                className="buttonForm"
                type="button"
                onClick={handleLabVisits}
              > */}
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
      <div style={{ marginLeft: "15%" }}>
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
