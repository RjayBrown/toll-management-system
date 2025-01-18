import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Accounts from "./components/dashboard/accounts/Accounts";
import Admin from "./components/dashboard/admin/Admin";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<HomePage />}>
					<Route path="/" element={<LoginPage />} />

					{/* PROTECTED */}
					<Route path="/dashboard" element={<Dashboard />}>
						<Route path="/dashboard/accounts" element={<Accounts />} />
						<Route path="/dashboard/admin" element={<Admin />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
