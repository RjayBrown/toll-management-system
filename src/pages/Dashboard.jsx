import React from "react";
import { Outlet } from "react-router-dom";

import MainNavbar from "../components/dashboard/MainNavbar";

const Dashboard = () => {
	return (
		<>
			<MainNavbar />
			<Outlet />
		</>
	);
};

export default Dashboard;
