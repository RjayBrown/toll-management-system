import React from "react";
import { Outlet } from "react-router-dom";

import MainNavbar from "../../components/navigation/MainNavbar";

const MainDashboardLayout = () => {
	return (
		<>
			<MainNavbar />
			<Outlet />
		</>
	);
};

export default MainDashboardLayout;
