import { useState, useEffect } from "react";
import {
	Outlet,
	useSearchParams,
	Navigate,
	useOutletContext,
} from "react-router-dom";

import AccountDetails from "../../components/dashboard/forms/accounts/AccountDetails";
import AccountInfoNavbar from "../../components/navigation/accounts/AccountInfoNavbar";

const AccountInfoLayout = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentAccount, setCurrentAccount] = useOutletContext();

	const params = searchParams.get("accountNumber");

	return params ? (
		<>
			<AccountDetails account={currentAccount} />
			<AccountInfoNavbar account={currentAccount} />
			<Outlet context={[currentAccount, setCurrentAccount]} />
		</>
	) : (
		<>
			{alert("ERROR: Unable to navigate - account is not selected")}
			<Navigate to="../" />
		</>
	);
};

export default AccountInfoLayout;
