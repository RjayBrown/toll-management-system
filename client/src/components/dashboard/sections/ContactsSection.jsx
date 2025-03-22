import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "../cards/Table";
import { UpdateContactsForm } from "../forms/accounts/UpdateContactsForm";

export const ContactsSection = () => {
	const context = useOutletContext();
	const table = "contacts";
	const search = context.currentAccount.demographics.contacts;
	const [showForm, setShowForm] = useState(false);
	// console.log(search);

	return (
		<>
			<Table table={table} search={search} setShowForm={setShowForm} />
			{showForm ? <UpdateContactsForm /> : null}
		</>
	);
};
