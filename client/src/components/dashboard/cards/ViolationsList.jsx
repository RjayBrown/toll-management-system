import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const ViolationsList = () => {
	const context = useOutletContext();
	const search = context.currentAccount.tolls.filter(
		(toll) => toll.violationNumber
	);
	const table = "tolls";

	return (
		<>
			<Table table={table} search={search} />
			{/* TODO: Create dispute form */}
		</>
	);
};
