import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoPage from "./components/DemoPage/DemoPage";
import DemoLogin from "./components/DemoLogin/DemoLogin";
import Login from   "./components/LoginComponent/Login"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
                                <Route path="/login" exact element={<DemoLogin />} />
				<Route path="/" exact element={<DemoPage />} /
				<Route path="/login" exact element={<Login />} />
				<Route path="/" exact element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
