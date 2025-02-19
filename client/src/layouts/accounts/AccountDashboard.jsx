import { useState } from "react";
import { Outlet } from "react-router-dom";

import AccountNavbar from "../../components/navigation/accounts/AccountNavbar";

const AccountDashboard = () => {
	const [currentAccount, setCurrentAccount] = useState(null);

	return (
		<>
			<AccountNavbar />
			<Outlet context={[currentAccount, setCurrentAccount]} />
		</>
	);
};

export default AccountDashboard;
