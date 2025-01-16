import React from "react";

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
				<button className="login">Login</button>
			</form>
		</>
	);
};

export default LoginForm;
