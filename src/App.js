import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from   "./components/LoginComponent/Login"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" exact element={<Login />} />
				<Route path="/" exact element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
