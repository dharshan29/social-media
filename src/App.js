import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
	const isAuthenticated = JSON.parse(localStorage.getItem("user"))
		? true
		: false;

	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/login");
		}
	}, [isAuthenticated]);

	return (
		<div className="App">
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
