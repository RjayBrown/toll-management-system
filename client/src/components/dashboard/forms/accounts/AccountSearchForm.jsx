import { useState } from "react";
import { useFocusInput } from "../../../../hooks/useFocusInput";

import { DashboardButton } from "../../../buttons/DashboardButton";

export const AccountSearchForm = () => {
	const [accountFormData, setAccountFormData] = useState({
		accountNumber: "",
		licensePlate: "",
		lastName: "",
		firstName: "",
		phoneNumber: "",
		deviceNumber: "",
		violationNumber: "",
		invoiceNumber: "",
	});

	const inputRef = useFocusInput();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setAccountFormData((prevformData) => {
			return {
				...prevformData,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const fields = Object.keys(accountFormData);
		const filter = [];
		fields.forEach((field) => {
			if (accountFormData[field]) {
				filter.push({
					// converting values to correct type for search filter
					[field]: Number.isNaN(+accountFormData[field])
						? accountFormData[field]
						: +accountFormData[field],
				});
			}
		});

		// TODO: Query db for matching accounts using filter
		console.log(filter);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex__col form__search card__shadow"
			tabIndex={0}
		>
			<legend>Search</legend>
			<label htmlFor="accountNumber">
				<span>Account Number:</span>
				<input
					ref={inputRef}
					type="text"
					name="accountNumber"
					value={accountFormData.accountNumber}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="licensePlate">
				<span>Plate Number:</span>
				<input
					type="text"
					name="licensePlate"
					value={accountFormData.licensePlate}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="lastName">
				<span>Last Name:</span>
				<input
					type="text"
					name="lastName"
					value={accountFormData.lastName}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="firstName">
				<span>First Name:</span>
				<input
					type="text"
					name="firstName"
					value={accountFormData.firstName}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="phoneNumber">
				<span>Day Phone:</span>
				<input
					type="phone"
					name="phoneNumber"
					pattern="[0-9]{10}"
					value={accountFormData.phoneNumber}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="deviceNumber">
				<span>Device Number:</span>
				<input
					type="text"
					name="deviceNumber"
					value={accountFormData.deviceNumber}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="violationNumber">
				<span>Violation Number:</span>
				<input
					type="text"
					name="violationNumber"
					value={accountFormData.violationNumber}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="invoiceNumber">
				<span>Invoice Number:</span>
				<input
					type="text"
					name="invoiceNumber"
					value={accountFormData.invoiceNumber}
					onChange={handleChange}
				/>
			</label>
			<DashboardButton>Go</DashboardButton>
		</form>
	);
};
