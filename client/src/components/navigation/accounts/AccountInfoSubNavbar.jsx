import { useState } from "react";
import { NavLink } from "react-router-dom";

const AccountInfoSubNavbar = ({ account }) => {
	// console.log(account);

	return (
		<nav className="flex__row subnav__secondary">
			<NavLink
				to={`.?accountNumber=${account.accountNumber}`}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Details
			</NavLink>
			<NavLink
				to={`conversion?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Conversion
			</NavLink>
		</nav>
	);
};

export default AccountInfoSubNavbar;
