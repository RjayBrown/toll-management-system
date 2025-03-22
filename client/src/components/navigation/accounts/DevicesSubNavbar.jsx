import { NavLink } from "react-router-dom";

export const DevicesSubNavbar = () => {
	return (
		<nav className="flex__row subnav__secondary">
			<NavLink
				to={"."}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Assigned Device List
			</NavLink>
			<NavLink
				to={"request"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Device Request
			</NavLink>
		</nav>
	);
};
