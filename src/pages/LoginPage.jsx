import React from "react";
import LoginForm from "../components/forms/LoginForm";

const LoginPage = () => {
	return (
		<>
			<div className="flex__col login" style={{ height: "85vh" }}>
				<LoginForm />
			</div>
		</>
	);
};

export default LoginPage;
