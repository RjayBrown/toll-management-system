import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

/**
 * Top level application layout. Initializes state for the current {@link user} and {@link isLoggedIn} status.
 *
 * @returns Renders {@link Header} component with props (current user & logged in status) and an {@link Outlet} component with state passed as {@link context} to child components.
 * @category Component (Layout)
 */
export const AppLayout = () => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const context = { user, setUser, isLoggedIn, setIsLoggedIn };

	return (
		<>
			<Header state={{ isLoggedIn, setIsLoggedIn }} user={user} />
			<Outlet context={context} />
		</>
	);
};
