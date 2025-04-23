import { useEffect } from "react";

/**
 * Custom hook that highlights the selected row on table elements
 *
 * @param {string} className Class name for querySelectorAll
 * @param {string} dependency Dependency for useEffect
 * @returns {function} useEffect with logic for highlighting rows
 */
export const useHighlightRows = (className, dependency) => {
	// TODO: Add multi-row selection
	return useEffect(() => {
		// console.log("adding effect");
		const tableRows = document.querySelectorAll(className);
		const toggleHighlight = (rowElement, arrayOfRowElements) => {
			if (rowElement && !rowElement.classList.contains("selected")) {
				rowElement.classList.add("selected");
			}

			arrayOfRowElements.forEach((row) => {
				if (row !== rowElement) {
					row.classList.remove("selected");
				}
			});
		};

		const addHighlightOnClick = (tableRows) => {
			tableRows.forEach((row) => {
				row.addEventListener("click", () => {
					toggleHighlight(row, tableRows);
				});
			});
		};
		addHighlightOnClick(tableRows);
		// console.log(dependency);

		return () => {
			tableRows.forEach(
				(rowElement) =>
					rowElement.removeEventListener("click", () =>
						toggleHighlight(row, tableRows)
					)
				// console.log("cleaning up effect")
			);
		};
	}, [dependency]);
};
