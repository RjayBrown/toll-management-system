import { Link, useNavigate } from "react-router-dom";

import { fetchData } from "../../util/fetch";

import { SiToll } from "react-icons/si";
import { MdDriveEta } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { LogOutButton } from "../buttons/LogOutButton";

/**
 * Application header
 *
 * @param {object} state { isLoggedIn, setIsLoggedIn }
 * @param {object} user { id, isAdmin }
 * @returns Uses {@link state} and {@link user} info to conditionally render home or dashboard <header className=""></header>
 * @category Component
 */
export const Header = ({ state, user }) => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		const isLoggedOut = await fetchData.logOut();
		if (isLoggedOut.success) {
			state.setIsLoggedIn(false);
			navigate("login");
		}
	};

	return (
		<header className="flex__row header">
			<Link to="." className="flex__row header__logo">
				<MdDriveEta className="header__car" />
				<SiToll className="header__text" />
			</Link>
			<div className="flex__row header__right">
				{state.isLoggedIn ? (
					<>
						<TbMessageReportFilled className="icon" />
						<span>0</span>
						<form className="header__dropdown">
							<label htmlFor="dropdown">
								<select name="dropdown" id="dropdown" disabled>
									<option>-- Dropdown Menu --</option>
								</select>
							</label>
						</form>
						<LogOutButton onClick={() => handleLogout()}>Log Out</LogOutButton>
						<Link to="dashboard" className="header__link">
							<FaUser className="icon icon__user" />
							{user ? (
								<h6 className="id">{`${user.id} ${
									user.isAdmin ? "(ADMIN)" : "(NON-ADMIN)"
								}`}</h6>
							) : null}
						</Link>
					</>
				) : (
					<Link to={"dashboard"}>
						<h5>Back-Office Toll CRM Dashboard</h5>
					</Link>
				)}
			</div>
		</header>
	);
};
