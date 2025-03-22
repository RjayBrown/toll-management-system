import { NavLink } from "react-router-dom";

export const FinancialsNavbar = () => {
	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to={"."}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Replenishment
			</NavLink>
			<NavLink
				to={"payment-history"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Payment History
			</NavLink>
			<NavLink
				to={"refunds"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Refunds
			</NavLink>
		</nav>
	);
};
