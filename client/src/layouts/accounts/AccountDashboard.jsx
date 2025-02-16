import { useState } from "react";
import { Outlet } from "react-router-dom";

import AccountNavbar from "../../components/navigation/accounts/AccountNavbar";

const AccountDashboard = () => {
	const [accounts, setAccounts] = useState(null);
	const [currentAccount, setCurrentAccount] = useState(null);

	return (
		<>
			<AccountNavbar />
			<Outlet
				context={[accounts, setAccounts, currentAccount, setCurrentAccount]}
			/>
		</>
	);
};

export default AccountDashboard;
