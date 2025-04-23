import { Link, useOutletContext } from "react-router-dom";

export const DashboardHomePage = () => {
	const context = useOutletContext();

	return (
		<>
			<section className="flex__col card card__home" tabIndex={0}>
				<h2>{`Welcome ${context.user.isAdmin ? "Admin" : "Employee"} ${
					context.user.id
				}`}</h2>
				<h4>You have no new messages</h4>
				<div className="btn__home">
					<Link to={"main"} className="btn__dashboard">
						Search Accounts
					</Link>
					<Link to={"admin"} className="btn__dashboard">
						Search Employees
					</Link>
				</div>
			</section>
		</>
	);
};
