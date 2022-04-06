import React from "react";
import {FaChartPie, FaUser, FaWheelchair} from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";

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
        <div className="sidebar-link-container">
            <Sidebar links={links} />
        </div>
    );
}

export default ScheduleAppointmentPage;