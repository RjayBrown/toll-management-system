import React from "react";

const MainNavbar = () => {
	return (
		<>
			<nav className="nav__primary">
				<a href="">Home</a>
				<a href="" className="pressed">
					Accounts
				</a>
				<a href="">Violations</a>
				<a href="">Service Requests</a>
				<a href="">Admin Panel</a>
			</nav>
		</>
	);
};

export default MainNavbar;
