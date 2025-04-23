import { Outlet, useOutletContext, Navigate } from "react-router-dom";
import { useValidateLocation } from "../../hooks/useValidateLocation";

import { ReadOnlyAccountDetails } from "../forms/ReadOnlyAccountDetails";
import { AccountInfoNavbar } from "../navigation/accounts/AccountInfoNavbar";
import { AccountDetailsForm } from "../forms/AccountDetailsForm";
import { AccountInfoSubNavbar } from "../navigation/accounts/AccountInfoSubNavbar";

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
					<AccountDetailsForm />
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
