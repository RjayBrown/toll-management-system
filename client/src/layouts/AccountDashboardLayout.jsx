import React from "react";
import { Outlet } from "react-router-dom";

import MainNavbar from "../navigation/MainNavbar";
import AccountsNavbar from "../navigation/AccountsNavbar";

const AccountDashboardLayout = () => {
	return (
		<>
			<MainNavbar />
			<AccountsNavbar />
			<Outlet />
		</>
	);
};

export default AccountDashboardLayout;
