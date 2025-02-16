const fetchData = {
	// async accounts(params = null, value = null) {
	async accounts(filter = "", value = "") {
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const url = `http://localhost:8000/api/accounts/search`;
		// console.log(filter, value);
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

	async employees() {
		const res = await fetch("http://localhost:8000/api/employees/search");
		const data = await res.json();
		return data;
	},
};

export default fetchData;
