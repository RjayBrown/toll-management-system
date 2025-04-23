import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook used to manage conditional rendering and routing for pages with nested navigation components. Monitors whether the current location matches the default path and updates state accordingly.
 *
 * @param {string} defaultPath Default path for the top level navigation component
 * @param {string} defaultSegment Last segment of the nested navigation component's default path
 * @returns {boolean} True if the current location matches any valid default path
 */
export const useValidateLocation = (defaultPath, defaultSegment) => {
	const [isDefaultPath, setIsDefaultPath] = useState(null);
	const location = useLocation();

	useEffect(() => {
		// console.log("Rendered path:", location.pathname);

		if (
			defaultPath === location.pathname ||
			`${defaultPath}/${defaultSegment}` === location.pathname
		) {
			setIsDefaultPath(true);
		} else {
			setIsDefaultPath(false);
		}
	}, [location.pathname]);
	// console.log("Default path?", isDefaultPath);

	return isDefaultPath;
};
