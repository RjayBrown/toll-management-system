import { useConditionalPath } from "../../../hooks/useConditionalPath";
import { NavLink } from "react-router-dom";

export const AccountInfoSubNavbar = ({ isDefaultPath }) => {
	const [currentPath, defaultPath, lastSegment] = useConditionalPath(
		"/dashboard/main/account"
	);

	return (
		<nav className="flex__row subnav__secondary">
			<NavLink
				to={currentPath === `${defaultPath}/${lastSegment}` ? "details" : "."}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Details
			</NavLink>
			<NavLink
				to={isDefaultPath ? "details/conversion" : "conversion"}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Conversion
			</NavLink>
		</nav>
	);
};
