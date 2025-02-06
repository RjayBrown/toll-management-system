import React from "react";
import { NavLink } from "react-router-dom";

const AccountInfoSubNavbar = () => {
	const account = { accountNumber: 0 };
	return (
		<nav className="flex__row subnav__secondary">
			<NavLink
				to={`details?account=${account.accountNumber}`}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Details
			</NavLink>
			<NavLink
				to={`details/conversion?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Conversion
			</NavLink>
		</nav>
	);
};

export default AccountInfoSubNavbar;
