import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useFocusInput } from "../../hooks/useFocusInput";

import { tableConfig } from "../../util/table-config";
import { DashboardButton } from "../buttons/DashboardButton";
import { fetchData } from "../../util/fetch";

export const UpdateForm = ({
	selectedRow,
	subDoc,
	nestedSubDoc,
	search,
	updateForm,
	setUpdateForm,
}) => {
	const context = useOutletContext();
	const inputRef = useFocusInput();
	const data = nestedSubDoc ? tableConfig[nestedSubDoc] : tableConfig[subDoc];
	const formFields = {};

	data.details.map((field) => {
		formFields[field.data] = "";
	});

	const [updateFormData, setUpdateFormData] = useState(formFields);
	const [defaultValue, setDefaultValue] = useState(null);
	console.log(updateForm.type);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUpdateFormData((prevformData) => {
			return {
				...prevformData,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		context.setIsLoading(true);
		console.log(context.currentAccount);
		const formFields = Object.keys(updateFormData);
		const id = { accountNumber: context.currentAccount.accountNumber };
		let keys = [];
		let newData = {};
		formFields.forEach((field) => {
			if (updateFormData[field]) {
				if (updateForm.type === "modify") {
					keys.push(field);
					newData = { ...newData, [field]: updateFormData[field] };
				} else {
					newData[`${field}`] = updateFormData[field];
				}
			}
		});
		const UpdateAccountDetails = async () => {
			const response = await fetchData.update("account", {
				id: id,
				subDoc: subDoc,
				nestedSubDoc: nestedSubDoc,
				index: selectedRow,
				keys: keys,
				data: newData,
				user: context.user.id,
				push: updateForm.type === "add" ? true : false,
			});
			context.setIsLoading(false);
			context.setCurrentAccount(response.account);
			setUpdateForm({
				type: null,
				show: false,
			});
		};

		console.log({
			id: id,
			subDoc: subDoc,
			nestedSubDoc: nestedSubDoc,
			index: selectedRow,
			keys: keys,
			data: newData,
			user: context.user.id,
			push: updateForm.type === "add" ? true : false,
		});
		const newDataExists = Object.keys(newData).length ? true : false;

		if (newDataExists) {
			UpdateAccountDetails();
		} else {
			(() => {
				alert(
					"Save Failed! You cannot run a blank query. Please enter text in at least one field"
				);
			})();
		}
	};

	return (
		<form className="card form__update flex__col" tabIndex={0}>
			<div className="top flex__row">
				<h6>Update Record</h6>
				<div className="actions flex__row">
					<DashboardButton className="btn__dashboard" onClick={handleSubmit}>
						Save
					</DashboardButton>
					<DashboardButton
						className="btn__dashboard close"
						onClick={() =>
							setUpdateForm({
								type: null,
								show: false,
							})
						}
					>
						Close
					</DashboardButton>
				</div>
			</div>
			<div className="fields flex__row">
				{/* TODO: Update logic for defaultValue with dropdown forms */}
				{data.details.map((field, i) => {
					const placeholder =
						updateForm.type === "modify" && search.length
							? search[selectedRow][field.data]
							: search[field.data];

					return field.options ? (
						<label key={i} htmlFor={field.label} className="flex__col">
							<span>{field.label}</span>
							<select
								ref={i === 0 ? inputRef : null}
								type={field.type}
								name={field.data}
								defaultValue={placeholder}
								className="dropdown"
								onChange={handleChange}
							>
								{field.options.map((option, i) => {
									return (
										<option
											value={option}
											key={i}
											disabled={i === 0 ? true : false}
											selected={i === 0 ? true : false}
										>
											{`${option}`}
										</option>
									);
								})}
							</select>
						</label>
					) : field.type === "checkbox" || field.type === "date" ? null : (
						<label key={i} htmlFor={field.label} className="flex__col">
							<span>{field.label}</span>
							<input
								ref={i === 0 ? inputRef : null}
								type={field.type}
								name={field.data}
								placeholder={updateForm.type === "modify" ? placeholder : null}
								value={
									field.data === "createdBy"
										? context.user.id
										: updateFormData[field.data]
								}
								onChange={handleChange}
								readOnly={
									(updateForm.type === "modify" && field.locked) ||
									field.data === "createdBy"
										? true
										: false
								}
							></input>
						</label>
					);
				})}
			</div>
		</form>
	);
};
