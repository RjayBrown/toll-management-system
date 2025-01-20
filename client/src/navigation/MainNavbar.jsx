import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const MainNavbar = () => {
	return (
		<nav className="nav__primary">
			<NavLink
				to="/dashboard"
				end
				className={({ isActive }) => (isActive ? "pressed" : null)}
			>
				Home
			</NavLink>
			<NavLink
				to="/dashboard/accounts"
				className={({ isActive }) => (isActive ? "pressed" : null)}
			>
				Accounts
			</NavLink>
			<NavLink
				to="/dashboard/admin"
				className={({ isActive }) => (isActive ? "pressed" : null)}
			>
				Admin Panel
			</NavLink>
		</nav>
	);
};

export default MainNavbar;
