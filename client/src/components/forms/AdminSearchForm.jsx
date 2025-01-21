import { useState } from "react";
import SearchButton from "../buttons/SearchButton";

const AdminSearchForm = () => {
	const [adminFormData, setAdminFormData] = useState({
		employeeID: "",
		accountNumber: "",
		deviceNumber: "",
		licensePlate: "",
		violationNumber: "",
		invoiceNumber: "",
		ServiceRequestNumber: "",
	});

	// console.log(adminFormData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSearchFormData((prevformData) => {
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
				<span>Employee ID:</span>
				<input type="text" name="accountNumber" onChange={handleChange} />
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
			<SearchButton />
		</form>
	);
};

export default AdminSearchForm;
