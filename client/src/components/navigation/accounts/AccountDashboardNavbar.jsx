import { NavLink } from "react-router-dom";

export const AccountDashboardNavbar = () => {
	return (
		<nav className="flex__row nav__secondary">
			<NavLink
				to={"."}
				end
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Accounts Home
			</NavLink>
			<NavLink
				to={"otg-tag-search"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				OTG Tag Search
			</NavLink>
			<NavLink
				to={"search-results"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Search List
			</NavLink>
			<NavLink
				to={"account"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Account Info
			</NavLink>
			<NavLink
				to={"financials"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Financials
			</NavLink>
			<NavLink
				to={"service-request"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Service Request
			</NavLink>
			<NavLink
				to={"tolls"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Toll History
			</NavLink>
		</nav>
	);
};
