import { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "../../components/navigation/admin/AdminNavbar";

const AdminDashboard = () => {
	const [accounts, setAccounts] = useState(null);

	return (
		<>
			<AdminNavbar />
			<Outlet context={[accounts, setAccounts]} />
		</>
	);
};

export default AdminDashboard;
