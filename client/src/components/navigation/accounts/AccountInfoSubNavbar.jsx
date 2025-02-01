import React from "react";
import { NavLink } from "react-router-dom";

const AccountInfoSubNavbar = () => {
	const account = { accountNumber: "" };
	return (
		<nav className="flex__row subnav__secondary">
			<NavLink
				to="."
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Details
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/conversion`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Conversion
			</NavLink>
		</nav>
	);
};

export default AccountInfoSubNavbar;
