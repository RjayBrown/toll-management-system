import React from "react";
import { NavLink } from "react-router-dom";

const AccountNavbar = () => {
	return (
		<nav className="flex__row nav__secondary">
			<NavLink
				to="/dashboard/accounts"
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Accounts Home
			</NavLink>
			<NavLink
				to="/dashboard/accounts/account-results"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Search List
			</NavLink>
			<NavLink
				to="/dashboard/accounts/info"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Info
			</NavLink>
			<NavLink
				to="dashboard/accounts/financials"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Financials
			</NavLink>
			<NavLink
				to="dashboard/accounts/service-request"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Service Request
			</NavLink>
			<NavLink
				to="dashboard/accounts/retail-tag-search"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Retail Tag Search
			</NavLink>
			<NavLink
				to="dashboard/accounts/invoices"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Invoices
			</NavLink>
			<NavLink
				to="dashboard/accounts/violations"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Violation
			</NavLink>
			<NavLink
				to="dashboard/accounts/history"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				History
			</NavLink>
		</nav>
	);
};

export default AccountNavbar;
