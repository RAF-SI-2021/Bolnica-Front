import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./pages/DemoPage/DemoPage";
import DoctorHomepage from "./pages/DoctorHomepage/DoctorHomepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import RegistrationPatientPage from "./pages/RegistrationPatientPage/RegistrationPatientPage";
import EmployeePreview from "./pages/EmployeePreviewPage/EmployeePreviewPage";
import PatientPreview from "./pages/PatientPreviewPage/PatientPreviewPage";
import PatientPreviewNurses from "./pages/PatientPreviewPageNurses/PatientPreviewPageNurses";
import NurseHomepage from "./pages/NurseHomepage/NurseHomepage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DoctorHomepage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/demo-page" exact element={<DemoPage />} />
        <Route path="/nurse" exact element={<NurseHomepage />} />
        <Route
          path="/admin/employee-preview"
          exact
          element={<EmployeePreview />}
        />
        <Route path="/patient-preview" exact element={<PatientPreview />} />
        <Route path="/register-employee" exact element={<RegistrationPage/>}/>
        <Route path="/register-patient" exact element={<RegistrationPatientPage/>}/>
        <Route
          path="/nurse/patient-preview"
          exact
          element={<PatientPreviewNurses />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
