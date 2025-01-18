import { useState, useEffect } from "react";

import Header from "./components/global/Header";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";

function App() {
	return (
		<section id="app">
			<Header />
			{/* <LoginPage /> */}
			<Dashboard />
		</section>
	);
}

export default App;
