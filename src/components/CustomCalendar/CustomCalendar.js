import React, { useEffect } from "react";
import { FaChartPie, FaUser, FaWheelchair } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import { Dropdown } from "react-bootstrap";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../redux/actions/doctors";

const ScheduleAppointmentPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDoctors());
    }, []);

    const doctors = useSelector((state) => state.doctors);

    const links = [
        {
            id: 1,
            text: "Pocetna",
            path: "/admin",
            icon: <FaChartPie />,
            isActive: true,
        },
        {
            id: 2,
            text: "Pacijenti",
            path: "/admin/employee-preview",
            icon: <FaWheelchair />,
            dividerAfter: true,
        },
        {
            id: 3,
            text: "Profil",
            path: "/profil",
            icon: <FaUser />,
        },
    ];

    const getDoctorAppointments = (id) => {
        console.log(id);
    };

    // if (doctors) getDoctorAppointments(doctors[0].id);

    return (
        <div>
            <div>
                <Sidebar links={links} />
            </div>
            <Dropdown className="dropdownButton">
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
                    <Dropdown.Item onClick={() => getDoctorAppointments(1)}>
                        Dr. Prvi
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => getDoctorAppointments(2)}>
                        Dr. Drugi
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div style={{ marginLeft: "15%", height: "100vh" }}>
                <CustomCalendar />
            </div>
        </div>
    );
};

export default ScheduleAppointmentPage;