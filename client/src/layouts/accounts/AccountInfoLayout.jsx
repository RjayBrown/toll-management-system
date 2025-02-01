import { useState } from "react";
import { Outlet } from "react-router-dom";

import AccountDetails from "../../components/forms/accounts/AccountDetails";
import AccountInfoNavbar from "../../components/navigation/accounts/AccountInfoNavbar";
import AccountInfoSubNavbar from "../../components/navigation/accounts/AccountInfoSubNavbar";

const AccountInfoLayout = () => {
	return (
		<>
			<AccountDetails />
			<AccountInfoNavbar />
			<AccountInfoSubNavbar />
			<Outlet />
		</>
	);
};

export default AccountInfoLayout;
