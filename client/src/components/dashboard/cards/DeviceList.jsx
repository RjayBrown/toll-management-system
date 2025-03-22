import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";
import { UpdateDevicesForm } from "../forms/accounts/UpdateDevicesForm";

export const DeviceList = () => {
	const context = useOutletContext();
	const search = context.currentAccount.devices;
	const table = "devices";
	const [showForm, setShowForm] = useState(false);
	// console.log(search);

	return (
		<>
			<Table table={table} search={search} setShowForm={setShowForm} />
			{showForm ? <UpdateDevicesForm /> : null}
		</>
	);
};
