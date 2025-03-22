import { NavLink } from "react-router-dom";

export const VehiclesSubNavbar = () => {
	return (
		<nav className="flex__row subnav__secondary">
			<NavLink
				to="."
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Vehicle List
			</NavLink>
			<NavLink
				to={"history"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Vehicle History
			</NavLink>
		</nav>
	);
};
