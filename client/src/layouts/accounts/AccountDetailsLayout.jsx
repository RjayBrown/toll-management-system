import { useState } from "react";
import { Outlet, useOutletContext, useSearchParams } from "react-router-dom";

import AccountInfoSubNavbar from "../../components/navigation/accounts/AccountInfoSubNavbar";

const AccountDetailsLayout = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [currentAccount, setCurrentAccount] = useOutletContext();

	const params = searchParams.get("accountNumber");

	return params ? (
		<>
			<AccountInfoSubNavbar account={currentAccount} />
			<Outlet context={[currentAccount, setCurrentAccount]} />
		</>
	) : (
		<>
			{alert("ERROR: Unable to navigate - account is not selected")}
			<Navigate to="../" />
		</>
	);
};

export default AccountDetailsLayout;
