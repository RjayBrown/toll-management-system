import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { AddNoteForm } from "../forms/accounts/AddNoteForm";
import { Table } from "../cards/Table";

export const NotesSection = () => {
	const context = useOutletContext();
	const table = "notes";
	const search = context.currentAccount.notes;
	const [showForm, setShowForm] = useState(false);
	// console.log(search);

	return (
		<>
			{showForm ? <AddNoteForm /> : null}
			<Table table={table} search={search} setShowForm={setShowForm} />
		</>
	);
};
