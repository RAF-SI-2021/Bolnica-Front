import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPatientsVisitsHistory } from "../../api";
import { getTableHeaders } from "../../commons/tableHeaders";
import Table from "../Table/Table";

const Visits = (props) => {
	const { isTab3, lbp } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(fetchPatientsVisits({ lbp }));
	}, []);

	const demoPatientsVisits = [
		{
			idPosete: 1,
			lbpPacijenta: 123,
			lbzPacijenta: "000",
			datumPosete: "2022-03-03",
			ime: "Marko",
			prezime: "Markovic",
			jmbg: "123456789",
			napomena: "nista",
		},
		{
			idPosete: 2,
			lbpPacijenta: 123,
			lbzPacijenta: "000",
			datumPosete: "2022-03-03",
			ime: "Iva",
			prezime: "Ivanic",
			jmbg: "123456789",
			napomena: "nista",
		},
		{
			idPosete: 3,
			lbpPacijenta: 123,
			lbzPacijenta: "000",
			datumPosete: "2022-03-03",
			ime: "Mara",
			prezime: "Maric",
			jmbg: "123456789",
			napomena: "nista",
		},
	];

	let table;
	if (isTab3) {
		table = (
			<Table
				headers={getTableHeaders("patientsVisit")}
				tableContent={demoPatientsVisits}
			/>
		);
	}
	return <div>{table}</div>;
};

export default Visits;
