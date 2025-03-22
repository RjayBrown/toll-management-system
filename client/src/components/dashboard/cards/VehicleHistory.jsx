import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const VehicleHistory = () => {
	const context = useOutletContext();
	const search = context.currentAccount.vehicles.filter(
		(vehicle) => !vehicle.current
	);
	const table = "vehicles";

	return (
		<>
			<Table table={table} search={search} />
		</>
	);
};
