import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

// import AccountContactsSubNavbar from "../../components/navigation/accounts/AccountContactsSubNavbar";

//  /details
const AccountContactsLayout = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// console.log(searchParams.toString());
	return (
		<>
			{/* <AccountContactsSubNavbar />
			<Outlet /> */}
			<h1>AccountContactsLayout</h1>
		</>
	);
};

export default AccountContactsLayout;
