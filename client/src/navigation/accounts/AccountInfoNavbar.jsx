import React from "react";
import { NavLink } from "react-router-dom";

const AccountInfoNavbar = () => {
	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to="."
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Details
			</NavLink>
			<NavLink
				to="search-results"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Contacts
			</NavLink>
			<NavLink
				to="info"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Addresses
			</NavLink>
			<NavLink
				to="financials"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Payment Info
			</NavLink>
			<NavLink
				to="service-request"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Vehicles
			</NavLink>
			<NavLink
				to="retail-tag-search"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Devices
			</NavLink>
			<NavLink
				to="invoices"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Plans
			</NavLink>
			<NavLink
				to="violations"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Notes
			</NavLink>
		</nav>
	);
};

export default AccountInfoNavbar;
