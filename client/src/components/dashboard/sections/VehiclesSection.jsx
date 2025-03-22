import { Outlet, useOutletContext } from "react-router-dom";

import { VehiclesSubNavbar } from "../../navigation/accounts/VehiclesSubNavbar";

export const VehiclesSection = () => {
	const context = useOutletContext();

	return (
		<>
			<VehiclesSubNavbar />
			<Outlet context={context} />
		</>
	);
};
