import { useValidateLocation } from "../../../hooks/useValidateLocation";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

import { ReadOnlyAccountDetails } from "../forms/accounts/ReadOnlyAccountDetails";
import { TollDetailsNavbar } from "../../navigation/accounts/TollDetailsNavbar";
import { TollList } from "../cards/TollList";
import { TollDetailsSubNavbar } from "../../navigation/accounts/TollDetailsSubNavbar";

export const TollsPage = () => {
	const context = useOutletContext();

	const isDefaultPath = useValidateLocation("/dashboard/main/tolls", "all");

	return context.currentAccount ? (
		<>
			<ReadOnlyAccountDetails account={context.currentAccount} />
			<TollDetailsNavbar isDefaultPath={isDefaultPath} />
			{isDefaultPath ? (
				<>
					<TollDetailsSubNavbar isDefaultPath={isDefaultPath} />
					<TollList />
				</>
			) : (
				<Outlet context={context} />
			)}
		</>
	) : (
		<>
			{alert("ERROR: Unable to navigate - account is not selected")}
			<Navigate to="../" />
		</>
	);
};
