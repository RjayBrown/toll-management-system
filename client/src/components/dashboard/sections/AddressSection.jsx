import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Table } from "../cards/Table";
import { UpdateAddressForm } from "../forms/accounts/UpdateAddressForm";

export const AddressSection = () => {
	const context = useOutletContext();
	const [showForm, setShowForm] = useState(false);

	const search = context.currentAccount.demographics.address;
	const title = "address";

	return (
		<>
			<Table
				table={title}
				search={search}
				setShowForm={setShowForm}
				readOnly={true}
			/>
			{showForm ? (
				<UpdateAddressForm
					table={title}
					search={search}
					setShowForm={setShowForm}
				/>
			) : null}
		</>
	);
};
