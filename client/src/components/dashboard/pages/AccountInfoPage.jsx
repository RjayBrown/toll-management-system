import { useValidateLocation } from "../../../hooks/useValidateLocation";
import { Outlet, useOutletContext, Navigate } from "react-router-dom";

import { ReadOnlyAccountDetails } from "../forms/accounts/ReadOnlyAccountDetails";
import { AccountInfoNavbar } from "../../navigation/accounts/AccountInfoNavbar";
import { UpdateAccountDetails } from "../forms/accounts/UpdateAccountDetails";
import { AccountInfoSubNavbar } from "../../navigation/accounts/AccountInfoSubNavbar";

export const AccountInfoPage = () => {
	const context = useOutletContext();
	const path = "/dashboard/main/account";
	const segment = "details";
	const isDefaultPath = useValidateLocation(path, segment);

	return context.currentAccount ? (
		<>
			<ReadOnlyAccountDetails account={context.currentAccount} />
			<AccountInfoNavbar isDefaultPath={isDefaultPath} />
			{isDefaultPath ? (
				<>
					<AccountInfoSubNavbar isDefaultPath={isDefaultPath} />
					<UpdateAccountDetails />
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
