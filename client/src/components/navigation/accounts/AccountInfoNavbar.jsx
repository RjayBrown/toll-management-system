import React from "react";
import { NavLink } from "react-router-dom";

const AccountInfoNavbar = () => {
	const account = { accountNumber: 0 };

	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to={`details?account=${account.accountNumber}`}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Details
			</NavLink>
			<NavLink
				to={`notes?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Notes
			</NavLink>
			<NavLink
				to={`contacts?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Contacts
			</NavLink>
			<NavLink
				to={`address?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Addresses
			</NavLink>
			<NavLink
				to={`payment?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Payment Info
			</NavLink>
			<NavLink
				to={`vehicles?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Vehicles
			</NavLink>
			<NavLink
				to={`devices?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Devices
			</NavLink>
			<NavLink
				to={`plans?account=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Plans
			</NavLink>
		</nav>
	);
};

export default AccountInfoNavbar;
