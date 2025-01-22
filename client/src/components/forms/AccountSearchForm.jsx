import { useState } from "react";
import SearchButton from "../buttons/SearchButton";

const AccountSearchForm = () => {
	// Create driver account context
	const [accountFormData, setAccountFormData] = useState({
		accountNumber: "",
		lastName: "",
		firstName: "",
		phoneNumber: "",
		deviceNumber: "",
		licensePlate: "",
		violationNumber: "",
		invoiceNumber: "",
	});

	// console.log(accountFormData);

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
		console.log("form submitted!");
		// search logic
	};
	return (
		<form onSubmit={handleSubmit} className="flex__col form__search">
			<legend>Search</legend>
			<label htmlFor="accountNumber">
				<span>Account Number:</span>
				<input type="text" name="accountNumber" onChange={handleChange} />
			</label>
			<label htmlFor="lastName">
				<span>Last Name:</span>
				<input type="text" name="lastName" onChange={handleChange} />
			</label>
			<label htmlFor="firstName">
				<span>First Name:</span>
				<input type="text" name="firstName" onChange={handleChange} />
			</label>
			<label htmlFor="phoneNumber">
				<span>Day Phone:</span>
				<input
					type="phone"
					name="phoneNumber"
					pattern="[0-9]{10}"
					onChange={handleChange}
				/>
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
			<SearchButton />
		</form>
	);
};

export default AccountSearchForm;
