import { Outlet, useOutletContext } from "react-router-dom";

import { DevicesSubNavbar } from "../../navigation/accounts/DevicesSubNavbar";

export const DevicesSection = () => {
	const context = useOutletContext();
	console.log(context);

	return (
		<>
			<DevicesSubNavbar />
			<Outlet context={context} />
		</>
	);
};
