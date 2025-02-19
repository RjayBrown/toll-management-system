import { useState } from "react";
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
				to={"info"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Info
			</NavLink>
			<NavLink
				to="info/financials"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Financials
			</NavLink>
			<NavLink
				to="info/service-request"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Service Request
			</NavLink>
			<NavLink
				to="info/retail-tag-search"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				OTG Tag Search
			</NavLink>
			<NavLink
				to="info/invoices"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Invoices
			</NavLink>
			<NavLink
				to="info/violations"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Violation
			</NavLink>
			<NavLink
				to="info/history"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				History
			</NavLink>
		</nav>
	);
};

export default AccountNavbar;
