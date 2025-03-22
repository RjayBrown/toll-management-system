import { useLocation } from "react-router-dom";

/**
 * Custom hook that conditionally sets the relative path to the default page using the current location. Maintains isActive state for the first NavLink in nested navigation components.
 *
 * @param {string} defaultPath Default path for the top level navigation component
 * @returns {Array} Array containing the current path, default path, and the last segment of the current path
 */
export const useConditionalPath = (defaultPath) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const pathSegments = location.pathname.split("/");
	const lastSegment = pathSegments[pathSegments.length - 1];

	return [currentPath, defaultPath, lastSegment];
};
