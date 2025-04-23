import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "../cards/Table";
import { UpdateForm } from "../../forms/UpdateForm";

export const PlansSection = () => {
	const context = useOutletContext();
	const [updateForm, setUpdateForm] = useState({
		type: null,
		show: false,
	});

	const [selectedRow, setSelectedRow] = useState(0);

	const search = context.currentAccount.plans;
	const subDoc = "plans";

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
					subDoc={subDoc}
					search={search}
					updateForm={updateForm}
					setUpdateForm={setUpdateForm}
				/>
			) : null}
		</>
	);
};
