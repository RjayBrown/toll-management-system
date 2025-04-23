export const fetchData = {
	async logIn(employeeID, password) {
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
	async authenticate() {
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
	async logOut() {
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
	async search(query, filter = null) {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = `http://localhost:8000/api/${query}/search`;
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

	async update(query, filter = null) {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = `http://localhost:8000/api/${query}/update`;
		// console.log(filter, value);
		try {
			const res = await fetch(url, {
				method: "PUT",
				body: JSON.stringify(filter),
				headers: myHeaders,
			});
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	},

	async create(query, filter = null) {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = `http://localhost:8000/api/${query}/create`;
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
};
