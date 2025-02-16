import { useState, useEffect } from "react";
import { Outlet, useSearchParams, Navigate } from "react-router-dom";
import fetchData from "../../api";

import AccountDetails from "../../components/dashboard/forms/accounts/AccountDetails";
import AccountInfoNavbar from "../../components/navigation/accounts/AccountInfoNavbar";

const AccountInfoLayout = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentAccount, setCurrentAccount] = useState(null);

	const params = searchParams.get("accountNumber");

	useEffect(() => {
		const filter = searchParams.toString().split("=")[0];
		const value = searchParams.toString().split("=")[1];

		const getSingleAccount = async () => {
			const response = await fetchData.accounts(filter, value);
			setCurrentAccount(response.accounts);
			console.log(currentAccount);
		};

		getSingleAccount();
	}, []);

	return params ? (
		<>
			<AccountDetails />
			<AccountInfoNavbar />
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
