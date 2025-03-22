import { Outlet, useOutletContext } from "react-router-dom";

import { AccountInfoSubNavbar } from "../../navigation/accounts/AccountInfoSubNavbar";

export const AccountDetailsSection = () => {
	const context = useOutletContext();

	return (
		<>
			<AccountInfoSubNavbar />
			<Outlet context={context} />
		</>
	);
};
