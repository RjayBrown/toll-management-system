import React from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "../navigation/AdminNavbar";

const AdminDashboard = () => {
	return (
		<>
			<AdminNavbar />
			<Outlet />
		</>
	);
};

export default AdminDashboard;
