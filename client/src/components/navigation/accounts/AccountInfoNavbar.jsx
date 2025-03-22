import { NavLink } from "react-router-dom";

export const AccountInfoNavbar = ({ isDefaultPath }) => {
	return (
		<nav className="flex__row subnav__primary">
			<NavLink
				to={isDefaultPath ? "." : "details"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Details
			</NavLink>
			<NavLink
				to={"contacts"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Contacts
			</NavLink>
			<NavLink
				to={"address"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Addresses
			</NavLink>
			<NavLink
				to={"notes"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Notes
			</NavLink>
			<NavLink
				to={"payment"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Payment Info
			</NavLink>
			<NavLink
				to={"vehicles"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Vehicles
			</NavLink>
			<NavLink
				to={"devices"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Devices
			</NavLink>
			<NavLink
				to={"plans"}
				className={({ isActive }) => (isActive ? "selected" : null)}
			>
				Plans
			</NavLink>
		</nav>
	);
};
