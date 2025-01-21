import React from "react";
import { Outlet } from "react-router-dom";

import MainNavbar from "../navigation/MainNavbar";

const MainDashboardLayout = () => {
	return (
		<>
			<MainNavbar />
			<Outlet />
		</>
	);
};

export default MainDashboardLayout;
