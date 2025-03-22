import { NavLink } from "react-router-dom";

export const MainDashboardNavbar = ({ user }) => {
	return (
		<>
			<nav className="flex__row nav__primary">
				<NavLink
					to="."
					end
					className={({ isActive }) => (isActive ? "selected" : null)}
				>
					Home
				</NavLink>
				<NavLink
					to="main"
					className={({ isActive }) => (isActive ? "selected" : null)}
				>
					Accounts
				</NavLink>
				<NavLink
					to="admin"
					className={({ isActive }) => (isActive ? "selected" : null)}
				>
					Admin Panel
				</NavLink>
			</nav>
		</>
	);
};
