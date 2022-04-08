import React, {useState} from "react";
import {FormSelect} from "react-bootstrap";
import "./styles.css";

const NewAppointment = (props) => {
    const {avatarUrl, userName, userTitle, doctorId, createNewAppointment, date, setNewAppointmentVisible} = props;

    const [examinationType, setVal] = useState('');

    console.log(date)
    const dateString = date.toLocaleString()
    return(
        <div className="new-appointment-container">
            <div className="new-appointment-header">
                <p className="header-paragraph">Dodaj novi pregled</p>
                <hr className="break-line"
                />
                <div className="new-appointment-doctor">
                    <div className="doctor-container">
                        <div className="avatar-container">
                            <img
                                className="user-avatar"
                                src={avatarUrl}
                                alt={userName}
                            />
                        </div>
                        <div className="name-container">
                            <p className="user-name">{userName}</p>
                            <p className="user-title">{userTitle}</p>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="comment-btn">Dodaj komentar</button>
                    </div>
                </div>
            </div>
            <div className="new-appointment-body">
                <div className="dropdown1">
                    <p className="reason-p">Razlog pregleda</p>
                    <FormSelect aria-label="select type of medical examination" onChange={(e) => setVal(e.target.value)}>
                        <option>Izaberi</option>
                        <option value="pregled">Pregled</option>
                        <option value="kontrola">Kontrola</option>
                        <option value="operacija">Operacija</option>
                        <option value="vizita">Vizita</option>
                    </FormSelect>
                </div>
                <div className="dropdown2">
                    <p className="patient-p">Pacijent</p>
                    <FormSelect aria-label="select patient">
                        <option>Izaberi</option>
                        <option value="1">Pacijent 1</option>
                        <option value="2">Pacijent 2</option>
                        <option value="3">Pacijent 3</option>
                    </FormSelect>
                </div>
                <div className="dropdown3">
                    <p className="date-p">Datum pregleda</p>
                    <p>{dateString}</p>
                </div>
            </div>
            <div className="new-appointment-buttons">
                <button className="my-close-btn" onClick={() => setNewAppointmentVisible(false)}>Zatvori</button>
                <button className="my-save-btn" onClick={() => createNewAppointment(doctorId, 3, date, examinationType)}>Sačuvaj</button>
            </div>
        </div>
    )
}

export default NewAppointment;