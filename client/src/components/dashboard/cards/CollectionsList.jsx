import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const CollectionsList = () => {
	const context = useOutletContext();
	const [showDisputeForm, setShowDisputeForm] = useState(false);

	const search = context.currentAccount.tolls.filter(
		(toll) => toll.tollStatus === "COLL"
	);
	const title = "tolls";

	return (
		<>
			<Table
				table={title}
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
