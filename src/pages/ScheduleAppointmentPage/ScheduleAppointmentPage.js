import React, { useEffect, useState } from "react";
import { FaChartPie, FaUser, FaWheelchair } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";
import { Dropdown } from "react-bootstrap";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../redux/actions/doctors";
import NewAppointment from "../../components/NewAppointment/NewAppointment";
import Header from "../../components/Header/Header";
import {createAppointmentNurse, deleteAppointmentNurse} from "../../redux/actions/appointments";
import DeleteAppointment from "../../components/DeleteAppointment/DeleteAppointment";

const ScheduleAppointmentPage = () => {
    const [date, setDate] = useState(new Date());
    const [newAppointmentVisible, setNewAppointmentVisible] = useState(false);
    const [deleteAppointmentVisible, setDeleteAppointmentVisible] = useState(false);
    const [currentDoctor, setCurrentDoctor] = useState(1);
    const [appointmentIdDelete, setAppointmentIdDelete] = useState(1);
    const [events, setEvents] = useState([{
        id: 1,
        startAt: '2022-04-08T08:00:00.000Z',
        endAt: '2022-04-08T09:00:00.000Z',
        summary: 'Prvi pregled',
        color: '#336cfb',
        calendarID: 'work'
    }]);

    Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
    }

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

    const createNewAppointment = (doctorId, patientId, date, examinationType) => {
        console.log({doctorId, patientId, date, examinationType})
        console.log(events)
        const newEvent = {
            id: events.length + 1,
            startAt: date.toISOString(),
            endAt: date.addHours(1).toISOString(),
            summary: events.length + '. pregled',
            color: '#336cfb',
            calendarID: 'work'
        }
        console.log(events)
        setNewAppointmentVisible(false)
        setEvents([...events, newEvent])
        dispatch((doctorId, patientId, date, examinationType) => createAppointmentNurse({doctorId, patientId, date, examinationType}));
    };


    const deleteAppointment = () => {
        setNewAppointmentVisible(false);
        //delete event from list
        dispatch( (appointmentIdDelete) => deleteAppointmentNurse({appointmentIdDelete}));
    }

    return (
        <div className="page-container">
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
                <CustomCalendar
                    events={events}
                    setDate={setDate}
                    setNewAppointmentVisible={setNewAppointmentVisible}
                    setDeleteAppointmentVisible={setDeleteAppointmentVisible}
                    setAppointmentIdDelete={setAppointmentIdDelete}
                />
            </div>
            {newAppointmentVisible ? <NewAppointment
                avatarUrl={"nikolaSlika 1.jpg"}
                userName={"Dr. Paun"}
                userTitle={"Kardiolog"}
                doctorId={1}
                createNewAppointment = {createNewAppointment}
                setNewAppointmentVisible={setNewAppointmentVisible}
                date={date}
            /> : <></>}

            {deleteAppointmentVisible ? <DeleteAppointment
                avatarUrl={"nikolaSlika 1.jpg"}
                userName={"Dr. Paun"}
                userTitle={"Kardiolog"}
                deleteAppointment = {deleteAppointment}
                date={date}
            /> : <></>}

        </div>
    );
};

export default ScheduleAppointmentPage;