import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { FaChartPie, FaWheelchair, FaUser } from "react-icons/fa";
import { useLocation } from "react-router";
import { Button } from "react-bootstrap";

const PatientExaminationPage = () => {
	const location = useLocation();
	const [patientId, setPatientId] = useState();

	useEffect(() => {
		const pathParts = location.pathname.split("/");
		setPatientId(pathParts[pathParts.length - 1]);
	}, [location]);

	if (patientId) console.log(patientId);

	const links = [
		{
			id: 1,
			text: "Pocetna",
			path: "/",
			icon: <FaChartPie />,
		},
		{
			id: 2,
			text: "Pacijenti",
			path: "/pacijenti",
			icon: <FaWheelchair />,
			dividerAfter: true,
		},
		{
			id: 3,
			text: "Profil",
			path: "/profil",
			icon: <FaUser />,
		},
	];

	return (
		<>
			<div className="sidebar-link-container">
				<Sidebar links={links} />
			</div>
			<div style={{ marginLeft: "15%" }}>
				<Header
					avatarUrl={"nikolaSlika 1.jpg"}
					welcomeMsg={"Dobro jutro"}
					userName={"Dr. Paun"}
					userTitle={"Kardiolog"}
					day={format(new Date(), "d")}
					date={format(new Date(), "d MMMM, yyyy")}
				/>
				Main
			</div>
		</>
	);
};

export default PatientExaminationPage;
