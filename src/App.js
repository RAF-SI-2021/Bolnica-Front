import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./pages/DemoPage/DemoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ScheduleAppointmentPage from "./pages/ScheduleAppointmentPage/ScheduleAppointmentPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<DemoPage />} />
				<Route path="/login" exact element={<LoginPage />} />
				<Route path="/nurse/schedule-appointment" exact element={<ScheduleAppointmentPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
