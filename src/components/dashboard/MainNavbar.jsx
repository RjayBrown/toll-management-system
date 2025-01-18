import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MainNavbar = () => {
	return (
		<nav className="nav__primary">
			<Link to="/dashboard">Home</Link>
			<Link to="/dashboard/accounts">Accounts</Link>
			<Link to="/dashboard/admin">Admin Panel</Link>
		</nav>
	);
};

export default MainNavbar;
