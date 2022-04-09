import "./registration.css";
import React, {useState} from "react";
import { createEmployee } from "../../redux/actions/login";
import { useDispatch} from "react-redux";
import { createEmployee } from "../../createEmployee";

function RegisterPage() {
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
    };
    dispatch(createEmployee(data));
  };
  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Registracija</h1>
            <br></br>
            <div className="element-container">
              <div class="element one">
                <input placeholder="Ime" onChange={onChangeNameHandler} />
              </div>
              <div class="element">
                <input
                  placeholder="Prezime"
                  onChange={onChangeSurNameHandler}
                />
              </div>
            </div>
            <input
              type="email"
              placeholder="Email"
              onChange={onChangeEmailHandler}
            />
            <input placeholder="JMBG" onChange={onChangeIdHandler} />
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
                  placeholder="Zanimanje"
                  onChange={onChangeProfessioneHandler}
                />
              </div>
              <div class="element">
                <input placeholder="Titula" onChange={onChangeTitleHandler} />
              </div>
            </div>
            <input
              placeholder="Kontakt telefon"
              onChange={onChangeContactHandler}
            />
            <div className="element-container">
              <div class="element one">
                <input
                  placeholder="Lozinka"
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

            {/* Staviti radio button vidi kako u reactu da se doda i kalendar */}
            <div className="element-container">
              <input type="radio" value="Male" name="gender" /> Muskarac
              <input
                class="one"
                type="radio"
                value="Woman"
                name="gender"
              />{" "}
              Zena
            </div>
            <br></br>
            <button>Registruj se</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
