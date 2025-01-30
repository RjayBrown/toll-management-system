import React from "react";
import { Outlet } from "react-router-dom";

import AccountNavbar from "../../navigation/accounts/AccountNavbar";

const AccountDashboard = () => {
	return (
		<>
			<AccountNavbar />
			<Outlet />
		</>
	);
};

export default AccountDashboard;
