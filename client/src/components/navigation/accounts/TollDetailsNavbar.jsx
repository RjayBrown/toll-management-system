import { NavLink } from "react-router-dom";

export const TollDetailsNavbar = ({ isDefaultPath }) => {
	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to={isDefaultPath ? "." : "all"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Details
			</NavLink>
			<NavLink
				to={"pay"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Payment
			</NavLink>
			<NavLink
				to={"transfer"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Transfer
			</NavLink>
		</nav>
	);
};
