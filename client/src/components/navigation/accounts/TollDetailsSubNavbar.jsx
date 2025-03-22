import { useConditionalPath } from "../../../hooks/useConditionalPath";
import { NavLink } from "react-router-dom";

export const TollDetailsSubNavbar = ({ isDefaultPath }) => {
	const [currentPath, defaultPath, lastSegment] = useConditionalPath(
		"/dashboard/main/tolls"
	);
	return (
		<nav className="flex__row subnav__secondary">
			<NavLink
				to={currentPath === `${defaultPath}/${lastSegment}` ? "all" : "."}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				All Tolls
			</NavLink>
			<NavLink
				to={isDefaultPath ? "all/invoices" : "invoices"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Invoices
			</NavLink>
			<NavLink
				to={isDefaultPath ? "all/violations" : "violations"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Violations
			</NavLink>
			<NavLink
				to={isDefaultPath ? "all/collections" : "collections"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Collections
			</NavLink>
		</nav>
	);
};
