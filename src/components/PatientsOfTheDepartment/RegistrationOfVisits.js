import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPatientVisits } from "../../api";

const RegistrationOfVisits = (props) => {
  const { lbp } = props;

  const [form, setForm] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  function handleRegistration(event) {
    event.preventDefault();
    dispatch(createPatientVisits({ lbp, ...form }));
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <form className="form-custom familyFix visits">
        <div className="form-group-custom">
          <input
            type="text"
            className="margin-left"
            name="ime"
            placeholder="Ime"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="margin-left"
            name="prezime"
            placeholder="Prezime"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-custom">
          <input
            type="text"
            className="margin-left"
            name="jmbg"
            placeholder="JMBG"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="margin-left"
            name="napomena"
            placeholder="Napomena"
            onChange={handleChange}
          />
        </div>
        <div className="form-group-custom">
          <br></br>
          <br></br>
          <br></br>
          <button onClick={handleRegistration}>Registruj posetu</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationOfVisits;
