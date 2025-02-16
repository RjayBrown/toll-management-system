import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import AccountInfoSubNavbar from "../../components/navigation/accounts/AccountInfoSubNavbar";

const AccountDetailsLayout = () => {
	return (
		<>
			<AccountInfoSubNavbar />
			<Outlet />
		</>
	);
};

export default AccountDetailsLayout;
