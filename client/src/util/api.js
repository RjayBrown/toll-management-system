export const fetchData = {
	async authenticateUser() {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = "http://localhost:8000/auth/";

		try {
			const res = await fetch(url, {
				method: "GET",
				credentials: "include",
				headers: myHeaders,
			});
			const authenticatedUser = await res.json();
			return authenticatedUser;
		} catch (error) {
			console.log(error);
		}
	},
	async logInUser(employeeID, password) {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = "http://localhost:8000/auth/login";

		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({ employeeID, password }),
				credentials: "include",
				headers: myHeaders,
			});
			const user = await res.json();
			return user;
		} catch (error) {
			console.log(error);
		}
	},
	async logOutUser() {
		const url = "http://localhost:8000/auth/logout";

		try {
			const res = await fetch(url, {
				method: "GET",
				credentials: "include",
			});
			if (res.ok) {
				const response = await res.json();
				console.log(response);
				return response;
			}
		} catch (error) {
			console.log(error);
		}
	},
	async accounts(filter = null) {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = `http://localhost:8000/api/accounts/search`;
		// console.log(filter, value);
		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(filter),
				headers: myHeaders,
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	},

	async employees() {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = "http://localhost:8000/api/employees/search";

		try {
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify({ [filter]: value }),
				headers: myHeaders,
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	},
};
