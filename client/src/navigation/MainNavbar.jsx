import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const MainNavbar = () => {
	return (
		<nav className="nav__primary">
			<NavLink
				to="/dashboard"
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Home
			</NavLink>
			<NavLink
				to="/dashboard/accounts"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Accounts
			</NavLink>
			<NavLink
				to="/dashboard/admin"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Admin Panel
			</NavLink>
		</nav>
	);
};

export default MainNavbar;
