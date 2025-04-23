import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "../cards/Table";
import { UpdateForm } from "../../forms/UpdateForm";

export const NotesSection = () => {
	const context = useOutletContext();
	const [updateForm, setUpdateForm] = useState({
		type: null,
		show: false,
	});
	const [selectedRow, setSelectedRow] = useState(0);

	const search = context.currentAccount.notes;
	const subDoc = "notes";

	return (
		<>
			{updateForm.show ? (
				<UpdateForm
					subDoc={subDoc}
					search={search}
					updateForm={updateForm}
					setUpdateForm={setUpdateForm}
				/>
			) : null}
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
		</>
	);
};
