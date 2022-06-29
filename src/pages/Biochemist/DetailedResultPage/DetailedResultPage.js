import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Header from "../../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getLabReport } from "../../../redux/actions/labReports";
import { getSidebarLinks } from "../../../commons/sidebarLinks";
import { useLocation } from "react-router";
import { format } from "date-fns";
import Table from "../../../components/Table/Table";
import { getTableHeaders } from "../../../commons/tableHeaders";

const DoctorHomepage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const labReports = useSelector((state) => state.labReports);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    dispatch(getLabReport(pathParts[pathParts.length - 1]));
  }, []);

  useEffect(() => {
    if (labReports && labReports.length > 0) {
      setResults(labReports.map((labReport) => 0));
    }
  }, [labReports]);

  const onResultChange = (event, entry) => {
    console.log(event.target.value);
    console.log(entry);
  };

  const handleClick = (entry) => {
    console.log(entry);
  };

  const headerProps = {
    avatarUrl: "nikolaSlika 1.jpg",
    welcomeMsg: "Dobro jutro",
    userName: "Dr. Paun",
    userTitle: "Kardiolog",
  };

  const demoAnalysisPreview = [
    {
      analysisId: "1239871293",
      analysisName: "GLU",
      parameterId: "84810193",
      parameterName: "Parametar 1",
      unit: "unit1",
      lowerThreshold: "5",
      upperThreshold: "10",
      doctorName: "Marko",
      doctorSurname: "Markovic",
      editLabReportHeader: "true",
    },
    {
      analysisId: "4128319231",
      analysisName: "HEM",
      parameterId: "7127319238",
      parameterName: "Parametar 2",
      unit: "jedinica",
      lowerThreshold: "1.4",
      upperThreshold: "3.2",
      doctorName: "Miroslav",
      doctorSurname: "Zeljic",
      editLabReportHeader: "true",
    },
    {
      analysisId: "81928319",
      analysisName: "KREAT",
      parameterId: "581923719",
      parameterName: "Parametar 3",
      unit: "jedinicaNeka",
      lowerThreshold: "123",
      upperThreshold: "200",
      doctorName: "Pera",
      doctorSurname: "Zivkovic",
      editLabReportHeader: "true",
    },
  ];

  return (
    <>
      <div className="sidebar-link-container">
        <Sidebar links={getSidebarLinks("biochemist", -1)} />
      </div>
      <div style={{ marginLeft: "20%" }}>
        <Header
          avatarUrl={headerProps.avatarUrl}
          welcomeMsg={headerProps.welcomeMsg}
          userName={headerProps.userName}
          userTitle={headerProps.userTitle}
          day={format(new Date(), "d")}
          date={format(new Date(), "d MMMM, yyyy")}
        />
        <Table
          headers={getTableHeaders("detailedResultPreview")}
          tableContent={demoAnalysisPreview}
          tableType="detailedResultPreview"
          handleClick={handleClick}
          onResultChange={onResultChange}
        />
      </div>
    </>
  );
};

export default DoctorHomepage;
