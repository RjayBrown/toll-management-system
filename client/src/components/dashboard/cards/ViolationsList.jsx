import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const ViolationsList = () => {
	const context = useOutletContext();
	const [showDisputeForm, setShowDisputeForm] = useState(false);

	const search = context.currentAccount.tolls.filter(
		(toll) => toll.violationNumber
	);
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
