import React from "react";
import LoginButton from "../Buttons/LoginButton";

const LoginForm = () => {
	return (
		<>
			<form className="flex__col form">
				<caption>Welcome to the Back Office Toll Management System</caption>
				<label>
					<span>User ID</span>
					<input type="text" name="username" />
				</label>
				<label>
					<span>Password</span>
					<input type="password" name="password" />
				</label>
				<LoginButton />
			</form>
		</>
	);
};

export default LoginForm;
