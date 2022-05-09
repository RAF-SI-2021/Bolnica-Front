import {
  FaHome,
  FaUserNurse,
  FaUser,
  FaPlusCircle,
  FaUserInjured,
} from "react-icons/fa";
import { BiCalendarPlus } from "react-icons/bi";
import { MdCalendarToday } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

export const getSidebarLinks = (role, activeId) => {
  if (role === "admin") {
    return [
      {
        id: 1,
        text: "Pocetna",
        path: "/admin",
        icon: <FaHome />,
        isActive: activeId === 1 ? true : false,
      },
      {
        id: 2,
        text: "Zaposleni",
        path: "/admin/employee-preview",
        icon: <FaUserNurse />,
        isActive: activeId === 2 ? true : false,
      },
      {
        id: 3,
        text: "Nov zaposleni",
        path: "/admin/register-employee",
        icon: <FaPlusCircle />,
        dividerAfter: true,
        isActive: activeId === 3 ? true : false,
      },
      {
        id: 4,
        text: "Profil",
        path: "/profile",
        icon: <FaUser />,
        isActive: activeId === 4 ? true : false,
      },
    ];
  } else if (role === "nurse") {
    return [
      {
        id: 1,
        text: "Početna",
        path: "/nurse",
        icon: <FaHome />,
        isActive: activeId === 1 ? true : false,
      },
      {
        id: 2,
        text: "Pacijenti",
        path: "/nurse/patient-preview",
        icon: <FaUserInjured />,
        isActive: activeId === 2 ? true : false,
      },
      {
        id: 3,
        text: "Zakazivanje",
        path: "/nurse/schedule-appointment",
        icon: <BiCalendarPlus />,
        isActive: activeId === 3 ? true : false,
      },
      {
        id: 4,
        text: "Nov pacijent",
        path: "/nurse/register-patient",
        icon: <FaPlusCircle />,
        dividerAfter: true,
        isActive: activeId === 4 ? true : false,
      },
      {
        id: 5,
        text: "Profil",
        path: "/profile",
        icon: <FaUser />,
        isActive: activeId === 5 ? true : false,
      },
    ];
  } else if (role === "biochemist") {
    return [
      {
        id: 1,
        text: "Početna",
        path: "/biochemist",
        icon: <FaHome />,
        dividerAfter: true,
        isActive: activeId === 1 ? true : false,
      },
      {
        id: 2,
        text: "Profil",
        path: "/profile",
        icon: <FaUser />,
        isActive: activeId === 2 ? true : false,
      },
    ];
  } else {
    return [
      {
        id: 1,
        text: "Početna",
        path: "/",
        icon: <FaHome />,
        isActive: activeId === 1 ? true : false,
      },
      {
        id: 2,
        text: "Pacijenti",
        path: "/patient-preview",
        icon: <FaUserInjured />,
        isActive: activeId === 2 ? true : false,
      },
      {
        id: 3,
        text: "Zakazani pregledi",
        path: "/appointments",
        icon: <MdCalendarToday />,
        isActive: activeId === 3 ? true : false,
      },
      {
        id: 5,
        text: "Kreiraj uput",
        path: "/create-refferal",
        icon: <GiNotebook />,
        dividerAfter: true,
        isActive: activeId === 5 ? true : false,
      },
      {
        id: 4,
        text: "Profil",
        path: "/profile",
        icon: <FaUser />,
        isActive: activeId === 4 ? true : false,
      },
    ];
  }
};
