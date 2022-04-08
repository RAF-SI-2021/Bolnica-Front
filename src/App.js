import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./pages/DemoPage/DemoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import EmployeePreview from "./pages/EmployeePreviewPage/EmployeePreviewPage";
import PatientPreview from "./pages/PatientPreviewPage/PatientPreviewPage";
import PatientPreviewNurses from "./pages/PatientPreviewPageNurses/PatientPreviewPageNurses";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DemoPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route
          path="/admin/employee-preview"
          exact
          element={<EmployeePreview />}
        />
        <Route path="/patient-preview" exact element={<PatientPreview />} />
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
