import { useState } from "react";
import { useFocusInput } from "../../hooks/useFocusInput";

import { DashboardButton } from "../buttons/DashboardButton";

export const AdminSearchForm = () => {
	const [adminFormData, setAdminFormData] = useState({
		employeeID: "",
		accountNumber: "",
		deviceNumber: "",
		licensePlate: "",
		violationNumber: "",
		invoiceNumber: "",
		ServiceRequestNumber: "",
	});

	const inputRef = useFocusInput();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setAdminFormData((prevformData) => {
			return {
				...prevformData,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form submitted!");
		// Query logic
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex__col form__search card__shadow"
			tabIndex={0}
		>
			<legend>Search</legend>
			<label htmlFor="accountNumber">
				<span>Employee ID:</span>
				<input
					ref={inputRef}
					type="text"
					name="accountNumber"
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="lastName">
				<span>Account Number:</span>
				<input type="text" name="lastName" onChange={handleChange} />
			</label>
			<label htmlFor="deviceNumber">
				<span>Device Number:</span>
				<input type="text" name="deviceNumber" onChange={handleChange} />
			</label>
			<label htmlFor="licensePlate">
				<span>Plate Number:</span>
				<input type="text" name="licensePlate" onChange={handleChange} />
			</label>
			<label htmlFor="violationNumber">
				<span>Violation Number:</span>
				<input type="text" name="violationNumber" onChange={handleChange} />
			</label>
			<label htmlFor="invoiceNumber">
				<span>Invoice Number:</span>
				<input type="text" name="invoiceNumber" onChange={handleChange} />
			</label>
			<label htmlFor="serviceRequestNumber">
				<span>Service Request Number:</span>
				<input
					type="text"
					name="serviceRequestNumber"
					onChange={handleChange}
				/>
			</label>
			<DashboardButton className={"btn__dashboard"}>Go</DashboardButton>
		</form>
	);
};
