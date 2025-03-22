import { useNavigate, useOutletContext } from "react-router-dom";

import { DashboardButton } from "../buttons/DashboardButton";

export const NotFound = () => {
	const context = useOutletContext();
	const navigate = useNavigate();

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Page Not Found</h1>
			<DashboardButton onClick={() => navigate("/")}>
				Back to Log-In Page
			</DashboardButton>
			<DashboardButton onClick={() => navigate("/dashboard")}>
				Back to Dashboard
			</DashboardButton>
		</div>
	);
};
