import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "./Table";
import { UpdateForm } from "../../forms/UpdateForm";

export const VehiclesList = () => {
	const context = useOutletContext();
	const [updateForm, setUpdateForm] = useState({
		type: null,
		show: false,
	});
	const [selectedRow, setSelectedRow] = useState(0);

	const search = context.currentAccount.vehicles;
	const subDoc = "vehicles";

	return (
		<>
			<Table
				table={subDoc}
				search={search}
				formState={{
					selectedRow,
					setSelectedRow,
					updateForm,
					setUpdateForm,
				}}
			/>
			{updateForm.show ? (
				<UpdateForm
					selectedRow={selectedRow}
					search={search}
					subDoc={subDoc}
					updateForm={updateForm}
					setUpdateForm={setUpdateForm}
				/>
			) : null}
		</>
	);
};
