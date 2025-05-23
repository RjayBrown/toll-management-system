import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const TollList = () => {
	const context = useOutletContext();
	const [showDisputeForm, setShowDisputeForm] = useState(false);

	const search = context.currentAccount.tolls;
	const subDoc = "tolls";

	return (
		<>
			<Table
				table={subDoc}
				search={search}
				formState={{
					showDisputeForm,
					setShowDisputeForm,
				}}
			/>
			{/* TODO: Create dispute form */}
		</>
	);
};
