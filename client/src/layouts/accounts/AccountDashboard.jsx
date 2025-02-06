import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import AccountNavbar from "../../components/navigation/accounts/AccountNavbar";

const AccountDashboard = () => {
	const [accounts, setAccounts] = useState(null);
	// const [searchParams, setSearchParams] = useSearchParams();
	// console.log(searchParams.toString());

	return (
		<>
			<AccountNavbar />
			<Outlet context={[accounts, setAccounts]} />
		</>
	);
};

export default AccountDashboard;
