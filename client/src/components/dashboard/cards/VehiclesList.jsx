import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";
import { UpdateVehiclesForm } from "../forms/accounts/UpdateVehiclesForm";

export const VehiclesList = () => {
	const context = useOutletContext();
	const search = context.currentAccount.vehicles;
	const table = "vehicles";
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<Table table={table} search={search} setShowForm={setShowForm} />
			{showForm ? <UpdateVehiclesForm /> : null}
		</>
	);
};
