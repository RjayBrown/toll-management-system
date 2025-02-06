import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import AccountDetails from "../../components/forms/accounts/AccountDetails";
import AccountInfoNavbar from "../../components/navigation/accounts/AccountInfoNavbar";
import AccountInfoSubNavbar from "../../components/navigation/accounts/AccountInfoSubNavbar";

const AccountInfoLayout = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.toString());
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
