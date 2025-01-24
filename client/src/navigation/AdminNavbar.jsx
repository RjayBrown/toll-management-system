import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
	return (
		<nav className="flex__row nav__secondary">
			<NavLink
				to="/dashboard/admin"
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Admin Home
			</NavLink>
			<NavLink
				to="/dashboard/admin/employee-results"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Employee Search List
			</NavLink>
			<NavLink
				to="/dashboard/admin/account-results"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Search List
			</NavLink>
			<NavLink
				to="/dashboard/admin/info"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Info
			</NavLink>
			<NavLink
				to="/dashboard/admin/service-request"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Service Request
			</NavLink>
			<NavLink
				to="/dashboard/admin/toll-dispute"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Toll Dispute
			</NavLink>
			<NavLink
				to="/dashboard/admin/violation-dispute"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Violation Dispute
			</NavLink>
		</nav>
	);
};

export default AdminNavbar;
