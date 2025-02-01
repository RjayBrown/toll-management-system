import React from "react";
import { Outlet } from "react-router-dom";

import AccountNavbar from "../../components/navigation/accounts/AccountNavbar";

const AccountDashboard = () => {
	return (
		<>
			<AccountNavbar />
			<Outlet />
		</>
	);
};

export default AccountDashboard;
