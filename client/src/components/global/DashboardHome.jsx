import React from "react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
	return (
		<>
			<section className="home card" tabIndex={0}>
				<h2>Welcome</h2>
				<h4>You have 2 new messages</h4>
			</section>
			<div className="btn__home">
				<Link to={"accounts"} className="search__dashboard">
					Search Accounts
				</Link>
				<Link to={"admin"} className="search__dashboard">
					Search Employees
				</Link>
			</div>
		</>
	);
};

export default DashboardHome;
