import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { fetchData } from "../../util/fetch";

import { Loading } from "../global/Loading";

/**
 * Protects all private routes. Sends a request to the server authenticating the user.
 *
 * @returns Renders Outlet (with context) for child components or redirects back to the login page.
 * @category Component (Route Protection)
 */

export const Authenticator = () => {
	const context = useOutletContext();
	const [isLoading, setisLoading] = useState(true);
	// console.log(context);

	useEffect(() => {
		const checkIsLoggedIn = async () => {
			const auth = await fetchData.authenticate();
			if (auth.success) {
				context.setIsLoggedIn(true);
				context.setUser({
					id: auth.employeeID,
					isAdmin: auth.isAdmin,
				});
				setisLoading(false);
			} else if (auth.error) {
				context.setIsLoggedIn(false);
				setisLoading(false);
				alert(`ERROR: ${auth.error}`);
			}
		};

		checkIsLoggedIn();
	}, []);

	return isLoading ? (
		<Loading />
	) : context.isLoggedIn ? (
		<Outlet context={context} />
	) : (
		<Navigate to={"/"} />
	);
};
