import React from "react";
import { useState } from "react";
import "./styles.css";

const initialState = {
	mainDifficulties: "",
	currentDisease: "",
};

const ExaminationForm = () => {
	const [form, setForm] = useState(initialState);
	const [diagnosisContent, setDiagnosisContent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// dispatch(signin(form, navigate, location));
	};

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleCheckBox = (e) =>
		setForm({ ...form, [e.target.name]: e.target.checked ? true : false });

	const swapDiagnosisContent = (e) => {
		e.preventDefault();
		setDiagnosisContent(!diagnosisContent);
	};

	const dummyDate = new Date();
	const stringDate = dummyDate.toLocaleDateString();

	const alergies = ["polen", "macja dlaka", "mleko"];
	const activeDiagnosis = ["slomljena kost", "upala pluca"];

	return (
		<form action="#" className="examForm">
			<p className="form-section-heading">Podaci o pacijentu</p>
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
			<p className="form-section-heading">Anamneza</p>
			<div className="form-group-custom">
				<div className="form-label-custom">Glavne tegobe:</div>
				<textarea
					type="text"
					name="mainDifficulties"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group-custom">
				<div className="form-label-custom">Sadasnja bolest:</div>
				<textarea
					type="text"
					name="currentDisease"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group-custom">
				<div className="form-label-custom">Licna anamneza:</div>
				<textarea
					type="text"
					name="personalAnamnesis"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group-custom">
				<div className="form-label-custom">Porodicna anamneza:</div>
				<textarea
					type="text"
					name="familyAnamnesis"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group-custom">
				<div className="form-label-custom">Misljenje pacijenta:</div>
				<textarea
					type="text"
					name="patientOpinion"
					onChange={handleChange}
				/>
			</div>
			<p className="form-section-heading">Postavljanje dijagnoze</p>
			<div className="form-group-custom">
				<div className="form-label-custom">Objektivni nalaz:</div>
				<textarea
					type="text"
					name="objectiveFinding"
					onChange={handleChange}
				/>
			</div>
			<button
				className="examSubmit"
				onClick={swapDiagnosisContent}
				style={{ marginBottom: "10px" }}
			>
				{!diagnosisContent ? "Dodati dijagnoze" : "Zatvoriti dijagnoze"}
			</button>
			{diagnosisContent ? (
				<>
					<div className="form-group-custom">
						<div className="form-label-custom">Dijagnoza:</div>
						<select
							onChange={handleChange}
							className="form-select-custom "
							aria-label="Default select example"
							defaultValue="0"
						>
							<option value="1">A15.3 - Tuberkuloza pluća</option>
							<option value="2">D50 - Nedostatkom gvožđa</option>
							<option value="3">
								I10 - Povišen krvni pritisak
							</option>
							<option value="3">
								I35.0 - Suženje aortnog zaliska
							</option>
							<option value="3">
								J11 - Grip, virus nedokazan
							</option>
							<option value="3">J12.9 - Zapaljenje pluća</option>
							<option value="3">
								K35 - Akutno zapaljenje slepog creva
							</option>
							<option value="3">
								K70.3 - Ciroza jetre uzrokovana alkoholom
							</option>
							<option value="3">
								K71.0 - Toksička bolest jetre zbog zastoja žuči
							</option>
							<option value="3">N20.0 - Kamen u bubregu</option>
						</select>
					</div>
					<div className="form-group-custom">
						<div className="form-label-custom">
							Rezultat lecenja:
						</div>
						<select
							onChange={handleChange}
							className="form-select-custom "
							aria-label="Default select example"
							defaultValue="0"
						>
							<option value="1">U toku</option>
							<option value="1">Oporavljen</option>
							<option value="1">Stalne posledice</option>
							<option value="1">Preminuo</option>
						</select>
					</div>
					<div className="form-group-custom">
						<div className="form-label-custom">
							Opis tekuceg stanja:
						</div>
						<textarea
							type="text"
							name="currentStatusDescription"
							onChange={handleChange}
						/>
					</div>
					<div>Postojeca dijagnoza</div>
					<input
						type="checkbox"
						name="existingDiagnosis"
						onChange={handleCheckBox}
					/>
				</>
			) : (
				<></>
			)}
			<p className="form-section-heading">Predlaganje terapije</p>
			<div className="form-group-custom">
				<div className="form-label-custom">Predlaganje terapije:</div>
				<textarea
					type="text"
					name="therapyProposal"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group-custom">
				<div className="form-label-custom">Savet:</div>
				<textarea type="text" name="advice" onChange={handleChange} />
			</div>

			<button className="examSubmit" onClick={handleSubmit}>
				Sacuvaj
			</button>
		</form>
	);
};

export default ExaminationForm;
