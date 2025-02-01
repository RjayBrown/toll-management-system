import React from "react";
import { NavLink } from "react-router-dom";

const AccountInfoNavbar = () => {
	const account = { accountNumber: "" };

	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to={`../info/:${account.accountNumber}/details`}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Details
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/contacts`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Contacts
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/address`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Addresses
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/payment-info`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Payment Info
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/vehicles`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Vehicles
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/devices`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Devices
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/plans`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Plans
			</NavLink>
			<NavLink
				to={`../info/:${account.accountNumber}/notes`}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Notes
			</NavLink>
		</nav>
	);
};

export default AccountInfoNavbar;
