import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useFocusInput } from "../../hooks/useFocusInput";

import { DashboardButton } from "../buttons/DashboardButton";
import { fetchData } from "../../util/fetch";
import { Loading } from "../global/Loading";

export const AccountSearchForm = () => {
	const context = useOutletContext();
	const navigate = useNavigate();
	const [accountFormData, setAccountFormData] = useState({
		accountNumber: "",
		licensePlate: "",
		lastName: "",
		firstName: "",
		primaryPhone: "",
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

	// Fetch data to use when rendering search results page
	const handleSubmit = (e) => {
		e.preventDefault();
		const formFields = Object.keys(accountFormData);
		const searchFilter = {};
		formFields.forEach((field) => {
			if (accountFormData[field]) {
				if (field === "accountNumber") {
					searchFilter[field] = accountFormData[field];
				} else if (field === "licensePlate") {
					searchFilter[`vehicles.${field}`] =
						accountFormData[field].toUpperCase();
				} else if (field === "deviceNumber") {
					searchFilter[`devices.${field}`] = accountFormData[field];
				} else if (field === "invoiceNumber" || field === "violationNumber") {
					searchFilter[`tolls.${field}`] = accountFormData[field];
				} else if (
					field === "lastName" ||
					field === "firstName" ||
					field === "primaryPhone"
				) {
					searchFilter[`demographics.${field}`] =
						accountFormData[field].toUpperCase();
				}
			}
		});

		const getMatchingAccounts = async () => {
			context.setIsLoading(true);
			const response = await fetchData.search("account", searchFilter);

			context.setAccounts(response.accounts);
			context.setIsLoading(false);

			navigate("search-results");
		};

		console.log(searchFilter);
		const queryHasFilter = Object.keys(searchFilter).length ? true : false;

		if (queryHasFilter) {
			getMatchingAccounts();
			// console.log(context);
		} else {
			(() => {
				context.setAccounts(null);
				navigate("search-results");
				// console.log(context);
			})();
		}
	};
	return context.isLoading ? (
		<Loading />
	) : (
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
			<label htmlFor="primaryPhone">
				<span>Day Phone:</span>
				<input
					type="text"
					name="primaryPhone"
					pattern="[0-9]{10}"
					value={accountFormData.primaryPhone}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="deviceNumber">
				<span>Device Number:</span>
				<input
					type="text"
					name="deviceNumber"
					pattern="[0-9]{11}"
					value={accountFormData.deviceNumber}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="violationNumber">
				<span>Violation Number:</span>
				<input
					type="text"
					name="violationNumber"
					pattern="T[0-9]{12}"
					value={accountFormData.violationNumber}
					onChange={handleChange}
				/>
			</label>
			<label htmlFor="invoiceNumber">
				<span>Invoice Number:</span>
				<input
					type="text"
					name="invoiceNumber"
					pattern="[0-9]{11}"
					value={accountFormData.invoiceNumber}
					onChange={handleChange}
				/>
			</label>
			<DashboardButton className="btn__dashboard">Go</DashboardButton>
		</form>
	);
};
