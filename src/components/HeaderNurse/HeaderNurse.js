import React from "react";
import { Dropdown } from "react-bootstrap";
import "./styles.css";

const HeaderNurse = (props) => {
  const { userName, userTitle } = props;

  return (
    <div className="containerCustom">
      <div className="doctor-container">
        <Dropdown className="dropdownButton">
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="dropdownToggle toggleButton"
          >
            Dr. Paun
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* {doctors.map((doctor) => {
						return (
							<Dropdown.Item
								onClick={() => getDoctorAppointments(doctor.id)}
							>
								Dr. {doctor.name}
							</Dropdown.Item>
						);
					})} */}
            {/*             <Dropdown.Item onClick={() => getDoctorAppointments(1)}>
              Dr. Prvi
            </Dropdown.Item>
            <Dropdown.Item onClick={() => getDoctorAppointments(2)}>
              Dr. Drugi
            </Dropdown.Item> */}
            <Dropdown.Item>Dr. Prvi</Dropdown.Item>
            <Dropdown.Item>Dr. Drugi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="user-container">
        <div className="name-container">
          <p className="user-name">{userName}</p>
          <p className="user-title">{userTitle}</p>
        </div>
        <div className="button-container">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderNurse;
