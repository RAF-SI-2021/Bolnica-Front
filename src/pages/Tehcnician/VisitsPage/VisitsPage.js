import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import "./styles.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table/Table";
import { getTableHeaders } from "../../../commons/tableHeaders";
import { getReferrals } from "../../../redux/actions/referrals";
import { getNumberofAppointments } from "../../../redux/actions/numberOfAppointments";
import ActionConformationModal from "../../../components/ActionConformationModal/ActionConformationModal";
import { createReferral } from "../../../redux/actions/referrals";

const VisitsPage = () => {
  const [isClicked1, setClicked1] = useState(true);
  const [isClicked2, setClicked2] = useState(false);
  const [isReport, setReport] = useState(false);
  const [form, setForm] = useState();
  const dispatch = useDispatch();
  const [isModal, setModal] = useState();

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
    setReport(!isReport);
  };

  // const toggleModal = () => {
  //   setModal(!isModal);
  // };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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

  function hadleScheduling(event) {
    event.preventDefault();
    console.log({ ...form });
    dispatch(createReferral({ ...form }));
  }

  function handleReports(event) {
    event.preventDefault();
    console.log({ ...form });
    dispatch(getReferrals({ ...form }));
  }

  function handleNumberOfReports(event) {
    event.preventDefault();
    console.log({ ...form });
    dispatch(getNumberofAppointments({ ...form }));
  }

  function handleEnd() {
    console.log("prosledjeno");
  }

  const number = useSelector((state) => state.number);
  const referrals = useSelector((state) => state.referrals);

  const demoUnrealizedLabReports = [
    {
      id: 1,
      ime: "Marko",
      prezime: "Markovic",
      datum: "29.05.2020.",
      vreme: "14:50",
      odeljenje: "ocno",
      spisakAnaliza: "spisakAnaliza",
      komentar: "komentar",
    },
    {
      id: 2,
      ime: "Marko",
      prezime: "Markovic",
      datum: "29.05.2020.",
      vreme: "14:50",
      odeljenje: "ocno",
      spisakAnaliza: "spisakAnaliza",
      komentar: "komentar",
    },
    {
      id: 3,
      ime: "Marko",
      prezime: "Markovic",
      datum: "29.05.2020.",
      vreme: "14:50",
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
        headers={getTableHeaders("unrealizedLabReports")}
        // tableContent={referrals}
        tableContent={demoUnrealizedLabReports}
        // handleRowClick={handleRowClick}
        tableType="labReports"
      />
      // )};
    );
  } else {
    table = <div></div>;
  }
  let forma;
  if (isClicked1) {
    forma = (
      <div>
        <form className="form-custom familyFix visits">
          <div className="form-group-custom">
            <input
              className="margin-right"
              placeholder="LBP"
              name="lbp"
              type="text"
              onChange={handleChange}
              required
            />

            <button className="buttonForm" type="button" onClick={toggleReport}>
              {/* <button
              className="buttonForm"
              type="button"
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
            <button className="buttonForm" onClick={handleNumberOfReports}>
              Dohvati
            </button>
          </div>
          <br></br>
          <div className="form-group-custom">
            <textarea
              name="description"
              rows="4"
              cols="50"
              onChange={handleChange}
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
