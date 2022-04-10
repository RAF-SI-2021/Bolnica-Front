import "./registration.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
function RegistrationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [proffesion, setProfession] = useState();
  const [title, setTitle] = useState();
  const [contact, setContact] = useState();
  const [gender, setGender] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [department, setDepartment] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangeSurNameHandler = (e) => {
    setSurname(e.target.value);
  };

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onChangeIdHandler = (e) => {
    setId(e.target.value);
  };

  const onChangeAddressHandler = (e) => {
    setAddress(e.target.value);
  };
  const onChangeProfessioneHandler = (e) => {
    setProfession(e.target.value);
  };
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContactHandler = (e) => {
    setContact(e.target.value);
  };
  const onChangeCityHandler = (e) => {
    setCity(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onChangeUserNameHandler = (e) => {
    console.log(gender);
    setUserName(e.target.value);
  };
  const onChangeDateHandler = (e) => {
    console.log(e.target.value);
    setDateOfBirth(e.target.value);
  };
  const onChangeGenderHandler = (e) => {
    setGender(e.target.value);
  };
  const onChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };
  const handleSubmit = (e) => {
    const data = {
      name: name,
      surname: surname,
      email: email,
      jmbg: id,
      address: address,
      city: city,
      proffesion: proffesion,
      title: title,
      contact: contact,
      userName: userName,
      city: city,
      gender: gender,
      dob: dateOfBirth,
      department: 1,
    };
    console.log(JSON.stringify(data));
    //dispatch(createEmployee(data, navigate));
  };
  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#" onSubmit={handleSubmit}>
            <h1>Prijava zaposlenih</h1>
            <br></br>
            <div className="element-container">
              <div class="element one">
                <input placeholder="Ime" onChange={onChangeNameHandler} />
              </div>
              <div class="element ">
                <input
                  placeholder="Prezime"
                  onChange={onChangeSurNameHandler}
                />
              </div>
            </div>
            <div className="element-container">
              <div class="element one">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={onChangeEmailHandler}
                />
              </div>
              <div class="element ">
                <input placeholder="JMBG" onChange={onChangeIdHandler} />
              </div>
            </div>

            <input
              type="date"
              data-date=""
              data-date-format="ddmmyyyy"
              onChange={onChangeDateHandler}
            />
            <div className="element-container">
              <div class="element one">
                <input
                  placeholder="Adresa stanovanja"
                  onChange={onChangeAddressHandler}
                />
              </div>
              <div class="element">
                <input
                  placeholder="Mesto stanovanja"
                  onChange={onChangeCityHandler}
                />
              </div>
            </div>
            
            <div className="element-container">
              <div class="element one">
                <input
                  placeholder="Kontakt"
                  onChange={onChangeContactHandler}
                />
              </div>
              <div class="element">
                <input placeholder="Odeljenje" onChange={onChangeDepartment} />
              </div>
            </div>
            <div className="element-container">
              <div class="element one">
                <input
                  placeholder="Lozinka"
                  type="password"
                  onChange={onChangePasswordHandler}
                />
              </div>
              <div class="element">
                <input
                  placeholder="Korisnicko ime"
                  onChange={onChangeUserNameHandler}
                />
              </div>
            </div>
            <div className="element-container">
              <div class="element one">
                <select name="titula" onChange={onChangeTitleHandler}>
                  <option value="">Titula</option>
                  <option value="Prof. dr. med.">Prof. dr. med.</option>
                  <option value="Dr. med. spec.">Dr. med. spec.</option>
                  <option value="Dr. sci. med.">Dr. sci. med.</option>
                  <option value="Dipl. farm.">Dipl. farm.</option>
                  <option value="Mag. farm.">Mag. farm.</option>
                  <option value="Mr.">Mr.</option>
                </select>
              </div>
              <div class="element">
                <select name="titula" onChange={onChangeProfessioneHandler}>
                    <option value="">Zanimanje</option>
                    <option value="Med. sestra">Med. sestra</option>
                    <option value="Spec. biohemicar">Spec. biohemicar</option>
                    <option value="Spec. gastroenterolog.">Spec. gastroenterolog</option>
                    <option value="Spec. ginekolog">Spec. ginekolog</option>
                    <option value="Spec. endrokrinolog">Spec. endrokrinolog</option>
                    <option value="Spec. kardiolog">Spec. kardiolog</option>
                    <option value="Spec. neurolog">Spec. neurolog</option>
                    <option value="Spec. nefrolog">Spec. nefrolog</option>
                    <option value="Spec. pshijatar">Spec. pshijatar</option>
                    <option value="Spec. pulmolog">Spec. pulmolog</option>
                    <option value="Spec. urolog">Spec. urolog</option>
                    <option value="Spec. hematolog">Spec. hematolog</option>
                    <option value="Spec. hirurg">Spec. hirurg</option>
                  </select>
              </div>
            </div>
            <div className="element-container">
              <div class="element one">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  placeholder="Muskarac"
                  onChange={onChangeGenderHandler}
                />
                Muskarac
              </div>
              <div class="element">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  placeholder="Zena"
                  onChange={onChangeGenderHandler}
                />
                {}
                Zena
              </div>
            </div>
            <br></br>
            <button>Registruj zaposlenog</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegistrationPage;
