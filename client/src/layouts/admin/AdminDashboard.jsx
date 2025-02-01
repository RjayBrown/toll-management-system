import React from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "../../components/navigation/admin/AdminNavbar";

const AdminDashboard = () => {
	return (
		<>
			<AdminNavbar />
			<Outlet />
		</>
	);
};

export default AdminDashboard;
