import React from "react";
import MainNavbar from "../components/dashboard/navigation/MainNavbar";
import SubNavbar from "../components/dashboard/navigation/SubNavbar";
import AccountSearchForm from "../components/Forms/AccountSearchForm";

const Dashboard = () => {
	return (
		<>
			<MainNavbar />
			<SubNavbar />
			<AccountSearchForm />
		</>
	);
};

export default Dashboard;
