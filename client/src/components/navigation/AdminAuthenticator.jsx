import { Navigate, Outlet, useOutletContext } from "react-router-dom";

/**
 * Uses authenticated user's role (provided in {@link context}) to protect admin dashboard routes.
 *
 * @returns Renders admin dashboard or navigates user back to the account search page.
 * @category Component (Route Protection)
 */

export const AdminAuthenticator = () => {
	const context = useOutletContext();
	// console.log(context);

	return context.user.isAdmin ? (
		<Outlet context={context} />
	) : (
		<>
			{alert("ERROR: Unuthorized - Admin access only")}
			<Navigate to={"../dashboard/main"} />;
		</>
	);
};
