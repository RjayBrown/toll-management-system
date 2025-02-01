import React from "react";
import { NavLink } from "react-router-dom";

const AccountNavbar = () => {
	return (
		<nav className="flex__row nav__secondary">
			<NavLink
				to="."
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Accounts Home
			</NavLink>
			<NavLink
				to="search-results"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Search List
			</NavLink>
			<NavLink
				to="info"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Info
			</NavLink>
			<NavLink
				to="financials"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Financials
			</NavLink>
			<NavLink
				to="service-request"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Service Request
			</NavLink>
			<NavLink
				to="retail-tag-search"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Retail Tag Search
			</NavLink>
			<NavLink
				to="invoices"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Invoices
			</NavLink>
			<NavLink
				to="violations"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Violation
			</NavLink>
			<NavLink
				to="history"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				History
			</NavLink>
		</nav>
	);
};

export default AccountNavbar;
