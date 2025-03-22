import { Outlet, useOutletContext } from "react-router-dom";

import { AccountDashboardNavbar } from "../../navigation/accounts/AccountDashboardNavbar";

/**
 * Layout used to render the account dashboard.
 *
 * @returns Renders the second level navigation component and Outlet (with {@link context}) for child components.
 * @category Component (Layout)
 */

export const AccountDashboardLayout = () => {
	const context = useOutletContext();

	return (
		<>
			<AccountDashboardNavbar />
			<Outlet context={context} />
		</>
	);
};
