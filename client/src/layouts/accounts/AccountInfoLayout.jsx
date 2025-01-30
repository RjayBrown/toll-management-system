import { useState } from "react";
import { Outlet } from "react-router-dom";

import AccountDetailsTop from "../../components/forms/accounts/AccountDetailsTop";
import AccountInfoNavbar from "../../navigation/accounts/AccountInfoNavbar";
import AccountInfoSubNavbar from "../../navigation/accounts/AccountInfoSubNavbar";

const AccountInfoLayout = () => {
	return (
		<>
			<AccountDetailsTop />
			<AccountInfoNavbar />
			<AccountInfoSubNavbar />
			<Outlet />
		</>
	);
};

export default AccountInfoLayout;
