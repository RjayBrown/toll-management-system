import React from "react";
import { Outlet } from "react-router-dom";

import MainNavbar from "../navigation/MainNavbar";
import AdminNavbar from "../navigation/AdminNavbar";

const AdminDashboardLayout = () => {
	return (
		<>
			<MainNavbar />
			<AdminNavbar />
			<Outlet />
		</>
	);
};

export default AdminDashboardLayout;
