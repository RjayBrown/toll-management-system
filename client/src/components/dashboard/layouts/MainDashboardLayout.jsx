import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import { MainDashboardNavbar } from "../../navigation/MainDashboardNavbar";

/**
 * Main layout used for the account and admin dashboard. Initializes and adds state management for the current customer account to {@link context}.
 *
 * @returns Renders the main navigation component and Outlet (with {@link context}) for child components.
 * @category Component (Layout)
 */

export const MainDashboardLayout = () => {
	const context = useOutletContext();
	const [accounts, setAccounts] = useState(null);
	const [currentAccount, setCurrentAccount] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<MainDashboardNavbar />
			<Outlet
				context={{
					...context,
					currentAccount,
					setCurrentAccount,
					accounts,
					setAccounts,
					isLoading,
					setIsLoading,
				}}
			/>
		</>
	);
};
