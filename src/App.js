import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./pages/DemoPage/DemoPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<DemoPage />} />
				<Route path="/login" exact element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
