import React from "react";
import { Outlet } from "react-router-dom";

import AccountNavbar from "../../navigation/AccountNavbar";

const EmployeeDashboard = () => {
	return (
		<>
			<AccountNavbar />
			<Outlet />
		</>
	);
};

export default EmployeeDashboard;
