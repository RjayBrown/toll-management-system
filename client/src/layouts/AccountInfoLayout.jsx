import React from "react";
import { Outlet } from "react-router-dom";

import AccountDetailsTop from "../components/forms/AccountDetailsTop";

const AccountInfoLayout = () => {
	return (
		<>
			<AccountDetailsTop />
			<Outlet />
		</>
	);
};

export default AccountInfoLayout;
