import React from "react";
import { Outlet } from "react-router-dom";

import SubNavbar from "./FirstSubNavbar";
import AccountSearchForm from "../../Forms/AccountSearchForm";

const Accounts = () => {
	return (
		<>
			<SubNavbar />
			<AccountSearchForm />
			<Outlet />
		</>
	);
};

export default Accounts;
