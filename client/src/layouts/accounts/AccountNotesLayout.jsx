import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

// import AccountNotesSubNavbar from "../../components/navigation/accounts/AccountNotesSubNavbar";

//  /details
const AccountNotesLayout = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// console.log(searchParams.toString());
	return (
		<>
			{/* <AccountNotesSubNavbar />
			<Outlet /> */}
			<h1>AccountNotesLayout</h1>
		</>
	);
};

export default AccountNotesLayout;
