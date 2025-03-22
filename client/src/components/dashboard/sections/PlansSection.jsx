import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "../cards/Table";
import { UpdatePlansForm } from "../forms/accounts/UpdatePlansForm";

export const PlansSection = () => {
	const context = useOutletContext();
	const table = "plans";
	const search = context.currentAccount.plans;
	const [showForm, setShowForm] = useState(false);
	console.log(search);

	return (
		<>
			<Table table={table} search={search} setShowForm={setShowForm} />
			{showForm ? <UpdatePlansForm /> : null}
		</>
	);
};
