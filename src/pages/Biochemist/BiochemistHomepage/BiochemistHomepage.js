import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import HeaderRight from "../../../components/HeaderRight/HeaderRight";
import Table from "../../../components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getLabReports,
  searchLabReports,
} from "../../../redux/actions/labReports";
import { useNavigate } from "react-router";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import { BiSearchAlt } from "react-icons/bi";
import "./styles.css";
import { getTableHeaders } from "../../../commons/tableHeaders";
import { getPatients } from "../../../redux/actions/patients";
import Header from "../../../components/Header/Header";
import { format } from "date-fns";

const DoctorHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [form, setForm] = useState({});
  const labReports = useSelector((state) => state.labReports);
  const patients = useSelector((state) => state.patients);

  useEffect(() => {
    dispatch(getLabReports());
    dispatch(getPatients());
  }, []);

  function handleOnChange(event) {
    setForm({ ...form, lbp: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    dispatch(searchLabReports(form));
  }

  const handleRowClick = (entry) => {
    navigate(`/biochemist/detailed-result/${entry[0][1]}`);
  };

  const onChangeDateHandler = (e, targetName) => {
    let formatted;
    const date = new Date(e.target.value);
    const years = date.toLocaleDateString("en-US", { year: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "numeric" });
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    formatted = years;
    formatted += month.length === 1 ? `-0${month}` : `-${month}`;
    formatted += day.length === 1 ? `-0${day}` : `-${day}`;
    setForm({
      ...form,
      [targetName]: formatted,
    });

    console.log({ ...form });
  };

  const demoLabReports = [
    {
      id: 1,
      lbpPacijenta: "1029481922",
      ime: "Marko",
      prezime: "Markovic",
    },
    {
      id: 2,
      lbpPacijenta: "12398129381",
      ime: "Zarko",
      prezime: "Zarkovic",
    },
    {
      id: 3,
      lbpPacijenta: "129038192381",
      ime: "Darko",
      prezime: "Darkovic",
    },
  ];

  const headerProps = {
    userName: "Dr. Paun",
    userTitle: "Lab Tehnicar",
  };

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("biochemist", 1)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <Header
          avatarUrl={headerProps.avatarUrl}
          welcomeMsg={headerProps.welcomeMsg}
          userName={headerProps.userName}
          userTitle={headerProps.userTitle}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />
        <div style={{ width: "60%", margin: "auto" }}>
          <form>
            <div className="form-group-custom">
              <select
                className="form-select-custom small-select"
                onChange={handleOnChange}
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
            </div>
            <div className="form-group-custom">
              <input
                type="date"
                data-date=""
                data-date-format="ddmmyyyy"
                name="odDatuma"
                onChange={(e) => onChangeDateHandler(e, "odDatuma")}
                className="margin-right"
              />
              <input
                type="date"
                data-date=""
                data-date-format="ddmmyyyy"
                name="doDatuma"
                onChange={(e) => onChangeDateHandler(e, "doDatuma")}
                className="margin-left"
              />
            </div>
            <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
              Pretrazi
            </button>
          </form>
        </div>
        {/* {labReports.length > 0 && ( */}
        <Table
          headers={getTableHeaders("labReportPreview")}
          tableContent={demoLabReports}
          handleRowClick={handleRowClick}
          tableType="labReports"
        />
        {/* )} */}
      </div>
    </>
  );
};

export default DoctorHomepage;
