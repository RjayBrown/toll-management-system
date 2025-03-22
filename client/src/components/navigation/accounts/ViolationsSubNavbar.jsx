import { NavLink } from "react-router-dom";

export const ViolationsSubNavbar = () => {
	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to={"."}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Toll Violations List
			</NavLink>
			<NavLink
				to={"transfer"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Transfer & Dismiss
			</NavLink>
		</nav>
	);
};
