import { Outlet, Navigate, useOutletContext } from "react-router-dom";

import { ReadOnlyAccountDetails } from "../forms/ReadOnlyAccountDetails";
import { FinancialsNavbar } from "../navigation/accounts/FinancialsNavbar";

export const FinancialsPage = () => {
	const context = useOutletContext();

	return context.currentAccount ? (
		<>
			<ReadOnlyAccountDetails account={context.currentAccount} />
			<FinancialsNavbar account={context.currentAccount} />
			<Outlet context={context} />
		</>
	) : (
		<>
			{alert("ERROR: Unable to navigate - account is not selected")}
			<Navigate to="../" />
		</>
	);
};
