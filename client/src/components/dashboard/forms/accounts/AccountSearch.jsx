import { useState } from "react";
import { useSearchParams, useOutletContext } from "react-router-dom";

const AccountSearch = () => {
	const [accounts, setAccounts] = useOutletContext();
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
		const fields = Object.keys(accountFormData);
		fields.forEach((field) => {
			if (accountFormData[field]) {
				// search logic

				console.log("form submitted!");
				console.log({ [field]: accountFormData[field] });
			}
		});
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
			{/* add functionality to fetch and navigate to search results page when clicked */}
			<button
				className="search__dashboard"
				onClick={() => {
					fetchAndNavigate();
				}}
			>
				Go
			</button>
		</form>
	);
};

export default AccountSearch;
