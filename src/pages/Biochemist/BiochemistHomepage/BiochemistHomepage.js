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

const DoctorHomepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const labReports = useSelector((state) => state.labReports);

  useEffect(() => {
    dispatch(getLabReports());
  }, []);

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(value);
    dispatch(searchLabReports(value));
  }

  const handleRowClick = (entry) => {
    navigate(`/biochemist/detailed-view/${entry[0][1]}`);
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
        <Sidebar links={getSidebarLinks("biochemist", 1)} />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <div className="flexRow padding-y-30">
          <form>
            <div className="flexRow">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                onChange={handleOnChange}
                className="fullWidth radius-left"
              />
              <button
                type="submit"
                className="radius-right buttonFix"
                onClick={handleSubmit}
              >
                <BiSearchAlt />
              </button>
            </div>
          </form>
          <HeaderRight userName="Jasda" userTitle="Alskcna" />
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
