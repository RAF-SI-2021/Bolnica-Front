import React from "react";

const MedicalRecord = () => {
	const dummyDate = new Date();
	const stringDate = dummyDate.toLocaleDateString();

	const alergies = ["polen", "macja dlaka", "mleko"];
	const activeDiagnosis = ["slomljena kost", "upala pluca"];

	return (
		<div>
			<div className="patient-info-custom">
				<div className="patient-personal-info">
					<p className="patient-info-text">Ime: Pacijent</p>
					<p className="patient-info-text">Prezime: Pacijentic</p>
					<p className="patient-info-text">
						Datum rodjena: {stringDate}
					</p>
				</div>
				<div className="patient-other-info">
					<p className="patient-info-text">
						Alergije: {alergies.map((alergy) => `${alergy} `)}
					</p>
					<p className="patient-info-text">
						Aktivne dijagnoze:{" "}
						{activeDiagnosis.map((diagnosis) => `${diagnosis} `)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default MedicalRecord;
