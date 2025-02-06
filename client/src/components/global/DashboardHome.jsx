import React from "react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
	return (
		<>
			<section className="home card" tabIndex={0}>
				<h2>Welcome</h2>
				<h4>You have 2 new nessages</h4>
			</section>
			<Link to={"accounts"} className="btn__home">
				<button className="search__dashboard">Search Driver Accounts</button>
			</Link>
		</>
	);
};

export default DashboardHome;
