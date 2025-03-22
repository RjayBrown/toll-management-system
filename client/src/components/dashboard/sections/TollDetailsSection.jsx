import { Outlet, useOutletContext } from "react-router-dom";

import { TollDetailsSubNavbar } from "../../navigation/accounts/TollDetailsSubNavbar";

export const TollDetailsSection = () => {
	const context = useOutletContext();

	return (
		<>
			<TollDetailsSubNavbar />
			<Outlet context={context} />
		</>
	);
};
