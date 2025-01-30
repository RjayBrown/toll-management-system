const fetchData = {
	async accounts() {
		const res = await fetch("http://localhost:8000/api/accounts/search");
		const data = await res.json();
		return data;
	},

	async employees() {
		const res = await fetch("http://localhost:8000/api/employees/search");
		const data = await res.json();
		return data;
	},
};

export default fetchData;
