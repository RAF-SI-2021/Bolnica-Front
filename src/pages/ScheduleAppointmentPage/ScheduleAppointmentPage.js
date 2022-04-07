import React from "react";
import {FaChartPie, FaUser, FaWheelchair} from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomCalendar from "../../components/CustomCalendar/CustomCalendar";

const ScheduleAppointmentPage = () => {
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


    return (
        <div>
            <div>
                <Sidebar links={links} />
            </div>
            <div style={{ marginLeft: "15%", height: "100vh"}}>
                <CustomCalendar/>
            </div>
        </div>
    );
}

export default ScheduleAppointmentPage;