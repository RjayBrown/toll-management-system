import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const VehicleHistory = () => {
	const context = useOutletContext();
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [showUpdateForm, setShowUpdateForm] = useState(false);

	const search = context.currentAccount.vehicles.filter(
		(vehicle) => !vehicle.current
	);
	const document = "vehicles";

	return (
		<>
			<Table
				table={document}
				search={search}
				formState={{
					showCreateForm,
					setShowCreateForm,
					showUpdateForm,
					setShowUpdateForm,
				}}
			/>
		</>
	);
};
