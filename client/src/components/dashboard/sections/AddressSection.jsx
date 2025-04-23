import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "../cards/Table";
import { UpdateForm } from "../../forms/UpdateForm";

export const AddressSection = () => {
	const context = useOutletContext();
	const [updateForm, setUpdateForm] = useState({
		type: null,
		show: false,
	});
	const [selectedRow, setSelectedRow] = useState(0);

	const search = context.currentAccount.demographics.address;
	const subDoc = "demographics";
	const nestedSubDoc = "address";

	return (
		<>
			<Table
				table={nestedSubDoc}
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
					nestedSubDoc={nestedSubDoc}
					updateForm={updateForm}
					setUpdateForm={setUpdateForm}
				/>
			) : null}
		</>
	);
};
