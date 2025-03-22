import { NavLink } from "react-router-dom";

export const AdminNavbar = () => {
	return (
		<nav className="flex__row nav__secondary">
			<NavLink
				to="."
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Admin Home
			</NavLink>
			<NavLink
				to="employee-management"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Employee Management
			</NavLink>
			<NavLink
				to="service-request"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Service Request
			</NavLink>
			<NavLink
				to="toll-dispute"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Toll Dispute
			</NavLink>
			<NavLink
				to="violation-dispute"
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Violation Dispute
			</NavLink>
		</nav>
	);
};
