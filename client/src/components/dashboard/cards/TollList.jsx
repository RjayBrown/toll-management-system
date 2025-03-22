import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const TollList = () => {
	const context = useOutletContext();
	const search = context.currentAccount.tolls;
	const table = "tolls";

	return (
		<>
			<Table table={table} search={search} />
			{/* TODO: Create dispute form */}
		</>
	);
};
