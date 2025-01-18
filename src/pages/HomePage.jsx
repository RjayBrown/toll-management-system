import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/global/Header";

const HomePage = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default HomePage;
