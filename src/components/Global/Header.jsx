import React from "react";
import { Link } from "react-router-dom";

import { SiToll } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";

const Header = () => {
	return (
		<header className="flex__row header">
			<Link to="/dashboard">
				<SiToll className="logo" />
			</Link>
			<div className="flex__row header__right">
				<TbMessageReportFilled />
				<span>2</span>
				<form className="form__header">
					<label>
						<input type="text" placeholder="Search" />
					</label>
					<button className="search__top">Go</button>
				</form>
				<FaUser />
			</div>
		</header>
	);
};

export default Header;
