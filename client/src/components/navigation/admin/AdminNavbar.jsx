import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
	return (
		<nav className="flex__row nav__secondary">
			<NavLink
				to="."
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Admin Home
			</NavLink>
			<NavLink
				to="employee-results"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Employee Search List
			</NavLink>
			<NavLink
				to="account-results"
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
				to="service-request"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Service Request
			</NavLink>
			<NavLink
				to="toll-dispute"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Toll Dispute
			</NavLink>
			<NavLink
				to="violation-dispute"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Violation Dispute
			</NavLink>
		</nav>
	);
};

export default AdminNavbar;
