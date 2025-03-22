import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import { AdminNavbar } from "../../navigation/admin/AdminNavbar";

/**
Admin Dashboard layout. Initializes state for employee. Receives context for current customer account.

 * @returns Renders top level navigation component (user state passed as props) and Outlet component (state passed to children as context)
 * @category Component (Layout)
 */

export const AdminDashboardLayout = () => {
	const [currentEmployee, setCurrentEmployee] = useState(null);
	const context = useOutletContext();

	return (
		<>
			<AdminNavbar />
			<Outlet context={{ ...context, currentEmployee, setCurrentEmployee }} />
		</>
	);
};
