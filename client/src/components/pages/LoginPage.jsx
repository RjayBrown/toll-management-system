import { useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { useFocusInput } from "../../hooks/useFocusInput";

import { fetchData } from "../../util/fetch";

import { LoginButton } from "../buttons/LoginButton";

/**
 * Contains a form to send login request to the server. Uses the result to update application state for logged in status and current user.
 *
 * @returns Renders the login page or redirects to the dashboard home page if the user is already logged in.
 * @category Component (Page)
 */
export const LoginPage = () => {
	const context = useOutletContext();
	const [error, setError] = useState(null);

	const inputRef = useFocusInput();

	const [loginFormData, setLoginFormData] = useState({
		employeeID: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginFormData((prevformData) => {
			return {
				...prevformData,
				[name]: value,
			};
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		const employeeID = loginFormData.employeeID;
		const password = loginFormData.password;

		const login = await fetchData.logIn(employeeID, password);

		if (login.success) {
			context.setIsLoggedIn(true);
			<Navigate to={"dashboard"} />;
		} else {
			setError(login.error ? `${login.error}` : `${login.message}`);
		}
	};

	return context.isLoggedIn ? (
		<Navigate to={"/dashboard"} />
	) : (
		<div className="flex__col login">
			<form onSubmit={handleLogin} className="flex__col form__login">
				<legend>Welcome to the Back Office Toll Management System</legend>
				<label>
					<span>Employee ID</span>
					<input
						ref={inputRef}
						tabIndex={1}
						type="text"
						name="employeeID"
						value={loginFormData.employeeID}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>Password</span>
					<input
						tabIndex={1}
						type="password"
						name="password"
						value={loginFormData.password}
						onChange={handleChange}
					/>
				</label>
				<LoginButton>Login</LoginButton>
				<p className="error">{error}</p>
			</form>
		</div>
	);
};
