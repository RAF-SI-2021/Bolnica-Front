import React, { useState } from "react";
import Table from "../Table/Table";
import { Button } from "reactstrap";
import { getTableHeaders } from "../../commons/tableHeaders";
import "./styles.css";
import { useDispatch } from "react-redux";
import CustomModalAnswer from "../CustomModalAnswer/CustomModalAnswer";
import CustomModal from "../CustomModal/CustomModal";
import { addAlergy, addVaccine } from "../../redux/actions/records";

const MedicalRecord = ({
  record,
  diseases,
  examinations,
  referrals,
  labReports,
}) => {
  const dob = new Date(record.pacijent.datumRodjenja);
  const stringDate = dob.toLocaleDateString();
  const [isExamination, setIsExamination] = useState(true);
  const [isRefferal, setIsRefferal] = useState(true);
  const [form, setForm] = useState({
    krvnaGrupa: record.krvnaGrupa,
    rhFaktor: record.rhFaktor,
  });
  const [vaccineForm, setVaccineForm] = useState({ naziv: "" });
  const [formChange, setFormChange] = useState(false);
  const [alergen, setAlergen] = useState("");
  const dispatch = useDispatch();
  const [modalVaccine, setModalVaccine] = useState(false);
  const [modalAlergen, setModalAlergen] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  console.log(record);

  const handleClick = () => {
    console.log("Cao");
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleChangeVaccine = (e) =>
    setVaccineForm({ ...vaccineForm, [e.target.name]: e.target.value });

  const handleChangeAlergen = (e) => setAlergen(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();
    // updateRecordIndo
  };

  const addNewAlergen = () => {
    dispatch(
      addAlergy(
        { naziv: alergen, lbp: record.pacijent.lbp },
        toggleModalError,
        toggleModalSuccess
      )
    );
  };

  const addNewVaccine = () => {
    dispatch(
      addVaccine(
        {
          naziv: vaccineForm.naziv,
          datumVakcinacije: vaccineForm.datumVakcinacije,
          lbp: record.pacijent.lbp,
        },
        toggleModalError,
        toggleModalSuccess
      )
    );
  };

  const onChangeDateHandler = (e) => {
    const date = new Date(e.target.value);
    const years = date.toLocaleDateString("en-US", { year: "numeric" });
    const month = date.toLocaleDateString("en-US", { month: "numeric" });
    const day = date.toLocaleDateString("en-US", { day: "numeric" });
    let formatted = years;
    formatted += month.length === 1 ? `-0${month}` : `-${month}`;
    formatted += day.length === 1 ? `-0${day}` : `-${day}`;
    setVaccineForm({
      ...vaccineForm,
      datumVakcinacije: formatted,
    });
  };

  const handleFormChange = () => {
    if (formChange) {
      setForm({
        krvnaGrupa: record.krvnaGrupa,
        rhFaktor: record.rhFaktor,
      });
    }
    setFormChange(!formChange);
  };

  const swapTabs = () => {
    setIsExamination(!isExamination);
  };
  const swapTabsRefferal = () => {
    setIsRefferal(!isRefferal);
  };

  const toggleModalVaccine = (e) => {
    if (e) e.preventDefault();
    setModalVaccine(!modalVaccine);
  };
  const toggleModalAlergen = (e) => {
    if (e) e.preventDefault();
    setModalAlergen(!modalAlergen);
  };
  const toggleModalError = () => setModalError(!modalError);
  const toggleModalSuccess = () => setModalSuccess(!modalSuccess);

  return (
    <>
      <p className="form-section-heading">Osnovni zdravsteni podaci</p>
      <div>
        <CustomModalAnswer
          title="Potvrda akcije"
          content="Da li želite da dodate vakcinu?"
          toggleModal={toggleModalVaccine}
          isOpen={modalVaccine}
          handleClick={addNewVaccine}
        />
        <CustomModalAnswer
          title="Potvrda akcije"
          content="Da li želite da dodate alergen?"
          toggleModal={toggleModalAlergen}
          isOpen={modalAlergen}
          handleClick={addNewAlergen}
        />
        <CustomModal
          title="Greška"
          content="Doslo je do greške prilikom dodavanja."
          toggleModal={toggleModalError}
          isOpen={modalError}
        />
        <CustomModal
          title="Uspeh"
          content="Uspešno dodato"
          toggleModal={toggleModalSuccess}
          isOpen={modalSuccess}
        />
        <button
          className="small-button"
          onClick={handleFormChange}
          style={{
            margin: "auto",
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {!formChange ? "Izmeni podatke" : "Pregled podataka"}
        </button>
        <div className="patient-info-custom">
          <div className="patient-personal-info" style={{ width: "50%" }}>
            <p className="patient-info-text">Ime: {record.pacijent.ime}</p>
            <p className="patient-info-text">
              Prezime: {record.pacijent.prezime}
            </p>
            <p className="patient-info-text">Datum rodjena: {stringDate}</p>
          </div>
          <div className="patient-other-info">
            <form style={{ width: "100%" }}>
              <div className="patient-info-text">
                <p style={{ width: "50%" }}>Krvna grupa: </p>
                <select
                  onChange={handleChange}
                  className="form-select-custom small-select margin-left"
                  aria-label="Default select example"
                  name="krvnaGrupa"
                  value={form.krvnaGrupa}
                  disabled={!formChange}
                >
                  <option value="" disabled>
                    Krvna grupa
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="0">0</option>
                  <option value="AB">AB</option>
                </select>
              </div>
              <div className="patient-info-text">
                <p style={{ width: "50%" }}>RH faktor: </p>
                <select
                  onChange={handleChange}
                  className="form-select-custom small-select margin-left"
                  aria-label="Default select example"
                  name="rhFaktor"
                  value={form.rhFaktor}
                  disabled={!formChange}
                >
                  <option value="" disabled>
                    RH Faktor
                  </option>
                  <option value="+">Plus</option>
                  <option value="-">Minus</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        {formChange && (
          <button
            className="small-button"
            onClick={submitForm}
            style={{
              margin: "auto",
              marginLeft: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Izmeni
          </button>
        )}
        <div className="patient-info-custom">
          <form style={{ width: "100%", marginRight: "15px" }}>
            <p className="patient-info-text">
              Alergije:{" "}
              {record.alergeni.map((alergy, index) => {
                if (index === record.alergeni.length - 1) return alergy.alergen;
                return `${alergy.alergen}, `;
              })}
            </p>
            <select
              onChange={handleChangeAlergen}
              className="form-select-custom small-select margin-left"
              aria-label="Default select example"
              name="alergen"
              value={alergen}
            >
              <option value="" disabled>
                Nova alergija
              </option>
              <option value="Mleko">Mleko</option>
              <option value="Jaja">Jaja</option>
              <option value="Orašasti plodovi">Orašasti plodovi</option>
              <option value="Plodovi mora">Plodovi mora</option>
              <option value="Pšenica">Pšenica</option>
              <option value="Soja">Soja</option>
              <option value="Riba">Riba</option>
              <option value="Penicilin">Penicilin</option>
              <option value="Cefalosporin">Cefalosporin</option>
              <option value="Tetraciklin">Tetraciklin</option>
              <option value="Karbamazepin">Karbamazepin</option>
              <option value="Ibuprofen">Ibuprofen</option>
            </select>
            <button
              className="small-button"
              onClick={toggleModalAlergen}
              style={{
                margin: "auto",
                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Dodaj alergiju
            </button>
          </form>
          <form style={{ width: "100%", marginLeft: "15px" }}>
            <p className="patient-info-text">
              Vakcine:{" "}
              {record.vakcinacije.map((vaccine, index) => {
                if (index === record.vakcinacije.length - 1)
                  return vaccine.vakcina.naziv;
                return `${vaccine.vakcina.naziv}, `;
              })}
            </p>
            <div className="form-group-custom">
              <select
                onChange={handleChangeVaccine}
                className="form-select-custom small-select margin-right"
                aria-label="Default select example"
                name="naziv"
                value={vaccineForm.naziv}
              >
                <option value="" disabled>
                  Nova vakcina
                </option>
                <option value="PRIORIX">PRIORIX</option>
                <option value="HIBERIX">HIBERIX</option>
                <option value="INFLUVAC">INFLUVAC</option>
                <option value="SYNFLORIX">SYNFLORIX</option>
                <option value="BCG VAKCINA">BCG VAKCINA</option>
              </select>
              <input
                type="date"
                data-date=""
                data-date-format="ddmmyyyy"
                onChange={onChangeDateHandler}
                name="datumVakcinacije"
                className="margin-left"
                value={vaccineForm.datumVakcinacije}
              />
            </div>
            <button
              className="small-button"
              onClick={toggleModalVaccine}
              style={{
                margin: "auto",
                marginLeft: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Dodaj vakcinu
            </button>
          </form>
        </div>
      </div>
      {isExamination && examinations.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija lekarskih pregleda{" "}
            {diseases.length > 0 && (
              <Button
                color="primary"
                outline={!isExamination}
                onClick={swapTabs}
                style={{ marginLeft: "30px" }}
              >
                Istorija bolesti
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("examinationHistory")}
            tableContent={examinations}
            handleClick={handleClick}
            tableType="examinations"
          />
        </>
      ) : diseases.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija bolesti{" "}
            {examinations.length > 0 && (
              <Button
                color="primary"
                outline={isExamination}
                onClick={swapTabs}
                style={{ marginLeft: "30px" }}
              >
                Istorija pregleda
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("diseaseHistory")}
            tableContent={diseases}
            handleClick={handleClick}
            tableType="diseases"
          />
        </>
      ) : (
        <p className="form-section-heading">
          Trenutno ne postoji istorija pregleda i bolesti
        </p>
      )}
      {isRefferal && referrals.length > 0 ? (
        <>
          <p className="form-section-heading" style={{ marginTop: "40px" }}>
            Istorija uputa{" "}
            {labReports.length > 0 && (
              <Button
                color="primary"
                outline={!isRefferal}
                onClick={swapTabsRefferal}
                style={{ marginLeft: "30px" }}
              >
                Istorija bolesti
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("examinationHistory")}
            tableContent={referrals}
            handleClick={handleClick}
            tableType="referrals"
          />
        </>
      ) : labReports.length > 0 ? (
        <>
          <p className="form-section-heading">
            Istorija laboratorijskih izvestaja{" "}
            {referrals.length > 0 && (
              <Button
                color="primary"
                outline={isRefferal}
                onClick={swapTabsRefferal}
                style={{ marginLeft: "30px" }}
              >
                Istorija pregleda
              </Button>
            )}
          </p>
          <Table
            headers={getTableHeaders("diseaseHistory")}
            tableContent={labReports}
            handleClick={handleClick}
            tableType="labReports"
          />
        </>
      ) : (
        <p className="form-section-heading">
          Trenutno ne postoji istorija uputa i laboratorijskih izvestaja
        </p>
      )}
    </>
  );
};

export default MedicalRecord;
