import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { Table } from "./Table";

export const DeviceList = () => {
	const context = useOutletContext();
	const navigate = useNavigate();
	const [updateForm, setUpdateForm] = useState({
		type: null,
		show: false,
	});
	const [selectedRow, setSelectedRow] = useState(0);

	const search = context.currentAccount.devices;
	const subDoc = "devices";

	return (
		<>
			<div className="card">
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
			</div>
		</>
	);
};
