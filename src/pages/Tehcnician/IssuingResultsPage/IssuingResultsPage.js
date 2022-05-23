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
import { getTableHeaders } from "../../../commons/tableHeaders";
import { getPatients } from "../../../redux/actions/patients";

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
    setValue(event.target.value);
  }
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(value);
    dispatch(searchLabReports(value));
  }

  const handleRowClick = (entry) => {
    navigate(`/technician/issuing-results/${entry[0][1]}`);
  };

  const handleChange = (e) => {};

  const headerProps = {
    userName: "Dr. Paun",
    userTitle: "Lab Tehnicar",
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

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("technician", 4)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <div className="flexRow" style={{ marginLeft: "83%" }}>
          <HeaderRight
            userName={headerProps.userName}
            userTitle={headerProps.userTitle}
          />
        </div>
        <div style={{ width: "60%", margin: "auto", paddingTop: "40px" }}>
          <form>
            <div className="form-group-custom">
              <select
                className="form-select-custom small-select"
                onChange={handleChange}
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
                name="startDate"
                onChange={(e) => onChangeDateHandler(e, "startDate")}
                className="margin-right"
              />
              <input
                type="date"
                data-date=""
                data-date-format="ddmmyyyy"
                name="endDate"
                onChange={(e) => onChangeDateHandler(e, "endDate")}
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
