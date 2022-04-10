import "./registrationPatient.css";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

function RegistrationPatientPage() {
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
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const [gender, setGender] = useState();
  const [dateOfBirth, setDate] = useState();

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
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    const data = {
      name: name,
      surname: surname,
      email: email,
      id: id,
      address: address,
      city: city,
      proffesion: proffesion,
      title: title,
      contact: contact,
      password: password,
      userName: userName,
      city: city,
      gender: gender,
      dateOfBirth: dateOfBirth,
    };
  };
  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Dodavanje pacijenta</h1>
            <br></br>
            <div className="element-container">
              <div class="element one">
                <input placeholder="Ime" onChange={onChangeNameHandler} />
              </div>
              <div class="element one">
                <input
                  placeholder="Ime roditelja"
                  onChange={onChangeSurNameHandler}
                />
              </div>
              <div class="element ">
                <input
                  placeholder="Prezime"
                  onChange={onChangeSurNameHandler}
                />
              </div>
            </div>
            <div className="element-container">
                <div class="element ">
                <input placeholder="JMBG" onChange={onChangeIdHandler} />
                </div>
                </div>
                <div className="element-container">    
                <div class="element one">  
           <input placeholder="Datum rodjenja" />
           </div>
           <div class="element one">  
           <input placeholder="Mesto rodjenja"/>
           </div>
           <div class="element">
           <input placeholder="Pol"/>
            </div>
           </div>
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
                  placeholder="Zemlja stanovanja"
                  onChange={onChangeAddressHandler}
                />
              </div>
              <div class="element">
                <input
                  placeholder="Zemlja drzavljanstva"
                  onChange={onChangeCityHandler}
                />
              </div>
            </div>
            <div className="element-container">
              <div class="element one">
                <input
                  placeholder="Kontankt telefon"
                  onChange={onChangeProfessioneHandler}
                />
              </div>
              <div class="element">
                <input type= "Email" placeholder="Email" onChange={onChangeTitleHandler} />
              </div>
            </div>
            <div className="element-container">
              <div class="element one">
                <input
                  placeholder="Ime i prezime staratelja"
                  onChange={onChangePasswordHandler}
                />
              </div>
              <div class="element">
                <input
                  placeholder="JMBG staratelja"
                  onChange={onChangeUserNameHandler}
                />
              </div>
            </div>

            <div className="element-container">
              <div class="element one">
              <select name="porodicniStatus" >
              <option value="">Porodicni status</option>
                <option value="Oba roditelja">Oba roditelja</option>
                <option value="">Rodtitelj razdvojeni</option>
                <option value="">Razvedni</option>
                <option value="">Jedan roditelje</option>
                <option value="">Bez roditelja</option>
                <option value="">Usvojen</option>
              </select>
              </div>
              <div class="element one">
              <select name="bracniStatus" >
              <option value="">Bracni status</option>
                <option value="Oba roditelja">U braku</option>
                <option value="">Razvedeni</option>
                <option value="">Udovac/udovica</option>
                <option value="">Samac/samica</option>
              </select>
              </div>
              <div class="element">
            <input placeholder = 'Broj dece'/>
            </div>
            </div>

            <div className="element-container">
            <div class="element one">
                <input
                  placeholder="Zanimanje"
                  onChange={onChangePasswordHandler}
                />
              </div>
            <div class="element">
              <select name="stepenStrucneSpreme" >
              <option value="">Stepen strucne spreme</option>
                <option value="Oba roditelja">Bez osnovnog obrazovanja</option>
                <option value="">Osnovno obrazovanje</option>
                <option value="">Srednje obrazovanje</option>
                <option value="">Vise obrazovanje</option>
                <option value="">Visoko obrazovanje</option>
              </select>
              </div>
            </div>
            <br></br>
            <button>Registruj pacijenta</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegistrationPatientPage;
;
