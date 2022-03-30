import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import SidebarLink from "../SidebarLink/SidebarLink";
import GeneralStats from "../GeneralStats/GeneralStats.js";

const DemoPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/login"
                  className="loginLink nav-link active"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                onClick={handleSubmit}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <SidebarLink
        props={[
          {
            id: 1,
            text: "Pocetna",
            path: "/",
            icon: "fa-solid fa-chart-pie",
            isActive: true,
          },
          {
            id: 2,
            text: "Pacijenti",
            path: "/pacijenti",
            icon: "fa-solid fa-wheelchair",
          },
          {
            id: 3,
            text: "Profil",
            path: "/profil",
            icon: "fa-solid fa-user-doctor",
          },
        ]}
      />
      <div className="components">
        <GeneralStats
          image={"fa-solid fa-briefcase-medical"}
          text="Zakazani pregledi"
          number="34"
        />
        <GeneralStats
          image={"fa-solid fa-person-cane"}
          text="Broj pacijenata"
          number="10"
        />
      </div>
    </>
  );
};

export default DemoPage;
