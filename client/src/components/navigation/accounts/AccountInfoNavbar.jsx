import React from "react";
import { NavLink } from "react-router-dom";

const AccountInfoNavbar = () => {
	const account = { accountNumber: 0 }; // replace with account returned from backend

	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to={`general?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Details
			</NavLink>
			<NavLink
				to={`notes?accountNumber=${account.accountNumber}`}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Notes
			</NavLink>
			<NavLink
				to={`contacts?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Contacts
			</NavLink>
			<NavLink
				to={`address?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Addresses
			</NavLink>
			<NavLink
				to={`payment?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Payment Info
			</NavLink>
			<NavLink
				to={`vehicles?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Vehicles
			</NavLink>
			<NavLink
				to={`devices?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Devices
			</NavLink>
			<NavLink
				to={`plans?accountNumber=${account.accountNumber}`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Plans
			</NavLink>
		</nav>
	);
};

export default AccountInfoNavbar;
