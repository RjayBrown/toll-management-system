import { useState, useEffect } from "react";
import LoginButton from "../buttons/LoginButton";

const LoginForm = () => {
	const [loginFormData, setLoginFormData] = useState({
		employeeID: "",
		password: "",
	});

	console.log(loginFormData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginFormData((prevformData) => {
			return {
				...prevformData,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted!");
		// login logic
	};
	return (
		<div className="flex__col login" style={{ height: "85vh" }}>
			<form onSubmit={handleSubmit} className="flex__col form__login">
				<legend>Welcome to the Back Office Toll Management System</legend>
				<label>
					<span>Employee ID</span>
					<input
						type="text"
						name="employeeID"
						value={loginFormData.userid}
						onChange={handleChange}
					/>
				</label>
				<label>
					<span>Password</span>
					<input
						type="password"
						name="password"
						value={loginFormData.password}
						onChange={handleChange}
					/>
				</label>
				<LoginButton />
			</form>
		</div>
	);
};

export default LoginForm;
