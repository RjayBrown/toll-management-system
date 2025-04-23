import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { format } from "../../util/format";
import { fetchData } from "../../util/fetch";

import { DashboardButton } from "../buttons/DashboardButton";

// TODO: FIX FETCH!!!
export const AccountDetailsForm = () => {
	const context = useOutletContext();
	const [detailsFormData, setDetailsFormData] = useState({
		email: "",
		corrDeliveryMode: "",
		stmtDeliveryMode: "",
		stmtFrequency: "",
		rebillAmount: "",
		securityQuestion: "",
		securityAnswer: "",
		mobileAlerts: "",
		emailAlerts: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDetailsFormData((prevformData) => {
			return {
				...prevformData,
				[name]: value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formFields = Object.keys(detailsFormData);
		const id = { accountNumber: context.currentAccount.accountNumber };
		let newData;
		let key = "";
		let subDoc = "demographics";

		formFields.forEach((field) => {
			if (detailsFormData[field]) {
				key = field;
				newData =
					typeof detailsFormData[field] === "string" &&
					field !== "email" &&
					field !== "securityQuestion"
						? detailsFormData[field].toUpperCase()
						: detailsFormData[field];
				detailsFormData[field] = "";
			}
		});

		const UpdateDetails = async () => {
			context.setIsLoading(true);
			if (key !== "email") {
				subDoc = null;
			}
			const response = await fetchData.update("account", {
				id: id,
				subDoc: subDoc,
				key: key,
				data: newData,
			});
			console.log(response);
			context.setIsLoading(false);
			context.setCurrentAccount(response.account);
		};

		console.log({
			id: id,
			subDoc: subDoc,
			key: key,
			data: newData,
		});
		const newDataExists = newData ? true : false;

		if (newDataExists) {
			UpdateDetails();
		} else {
			(() => {
				alert("ERROR: Data has not changed");
			})();
		}
	};

	return (
		<form
			className="flex__col card card__details"
			onSubmit={handleSubmit}
			tabIndex={0}
		>
			<div className="top flex__row">
				<h5 className="title">Account Details</h5>
				<DashboardButton className="btn__dashboard">Save</DashboardButton>
			</div>
			<fieldset className="form-table">
				<h5 className="heading">CORRESPONDENCE</h5>
				<div className="flex__row form__details">
					<label className="flex__row" htmlFor="email">
						<span>Email Address:</span>
						<input
							type="email"
							className="big"
							name="email"
							defaultValue={context.currentAccount.demographics.email}
							onChange={handleChange}
						/>
					</label>
					<label className="flex__row" htmlFor="corrDeliveryMode">
						<span>Corr Delivery Mode:</span>
						<select
							type="text"
							className="small"
							name="corrDeliveryMode"
							defaultValue={context.currentAccount.corrDeliveryMode}
							onChange={handleChange}
						>
							<option value="EMAIL">EMAIL</option>
							<option value="MAIL">MAIL</option>
						</select>
					</label>
					<label className="flex__row" htmlFor="stmtDeliveryMode">
						<span>Stmt Delivery Mode:</span>
						<select
							type="text"
							className="small"
							name="stmtDeliveryMode"
							defaultValue={context.currentAccount.stmtDeliveryMode}
							onChange={handleChange}
						>
							<option value="EMAIL">EMAIL</option>
							<option value="MAIL">MAIL</option>
						</select>
					</label>
					<label className="flex__row" htmlFor="stmtFrequency">
						<span>Stmt Frequency:</span>
						<select
							type="text"
							className="small"
							name="stmtFrequency"
							defaultValue={context.currentAccount.stmtFrequency}
							onChange={handleChange}
						>
							<option value="MONTHLY">MONTHLY</option>
							<option value="BI-MONTHLY">BI-MONTHLY</option>
						</select>
					</label>
				</div>
			</fieldset>
			<fieldset className="form-table">
				<h5 className="heading">REPLENISHMENT</h5>
				<div className="flex__row form__details">
					<label className="flex__row" htmlFor="pay-type">
						<span>Rebill Pay Type:</span>
						<input
							type="text"
							className="big"
							name="pay-type"
							value={context.currentAccount.payMethod}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="read-rebillAmount">
						<span>Rebill Amt:</span>
						<input
							type="text"
							className="small"
							name="read-rebillAmount"
							value={format.currency(context.currentAccount.rebillAmount)}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="rebillAmount">
						<span>Set Rebill Amt:</span>
						<input
							type="number"
							className="small"
							name="rebillAmount"
							defaultValue={undefined}
							onChange={handleChange}
						/>
					</label>
					<label className="flex__row" htmlFor="rebill-thrsh">
						<span>Rebill Thrsh Amt:</span>
						<input
							type="text"
							className="small"
							name="rebill-thrsh"
							value={
								context.currentAccount.rebillAmount < 50
									? format.currency(10)
									: format.currency(context.currentAccount.rebillAmount * 0.25)
							}
							readOnly={true}
						/>
					</label>
				</div>
			</fieldset>
			<fieldset className="form-table">
				<h5 className="heading">REVOCATION/COLLECTION</h5>
				<div className="flex__row form__details">
					<label className="flex__row" htmlFor="coll-status">
						<span>Coll Status:</span>
						<input
							type="text"
							className="big"
							name="coll-status"
							value={undefined}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="rvkw">
						<span>Rvk Warning Date:</span>
						<input
							type="number"
							className="small"
							name="rvkw"
							value={undefined}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="rvkf">
						<span>Rvk Final Date:</span>
						<input
							type="number"
							className="small"
							name="rvkf"
							value={undefined}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="coll-date">
						<span>Collections Date:</span>
						<input
							type="number"
							className="small"
							name="coll-date"
							value={undefined}
							readOnly={true}
						/>
					</label>
				</div>
			</fieldset>
			<fieldset className="form-table">
				<h5 className="heading">MISCELLANEOUS</h5>
				<div className="flex__row form__details">
					<label className="flex__row" htmlFor="securityQuestion">
						<span>Challenge Q:</span>
						<select
							type="text"
							className="big"
							name="securityQuestion"
							defaultValue={context.currentAccount.securityQuestion}
							onChange={handleChange}
						>
							<option value="What was the name of your first pet?">
								What was the name of your first pet?
							</option>
							<option value="What was the name of your elementary school?">
								What was the name of your elementary school?
							</option>
							<option value="Who was your favorite teacher?">
								Who was your favorite teacher?
							</option>
							<option value="What was the make and model of your first car?">
								What was the make and model of your first car?
							</option>
							<option value="City of your first full-time job?">
								City of your first full-time job?
							</option>
							<option value="What is your favorite vacation spot?">
								What is your favorite vacation spot?
							</option>
							<option value="What was the name of your childhood best friend?">
								What was the name of your childhood best friend?
							</option>
							<option value="What is your maternal grandmother's maiden name?">
								What is your maternal grandmother's maiden name?
							</option>
						</select>
					</label>
					<label className="flex__row" htmlFor="securityAnswer">
						<span>Challenge Ans:</span>
						<input
							type="text"
							className="small"
							name="securityAnswer"
							defaultValue={context.currentAccount.securityAnswer.toUpperCase()}
							onChange={handleChange}
						/>
					</label>
					<label className="flex__row" htmlFor="mobile-alerts">
						<span>Mobile Alerts:</span>
						<select
							type="text"
							className="small"
							name="mobile-alerts"
							defaultValue={context.currentAccount.mobileAlerts}
							onChange={handleChange}
						>
							<option value="PENDING">PENDING</option>
							<option value="OPT-IN">OPT-IN</option>
							<option value="OPT-OUT">OPT-OUT</option>
						</select>
					</label>
					<label className="flex__row" htmlFor="email-alerts">
						<span>Email Alerts:</span>
						<select
							type="text"
							className="small"
							name="email-alerts"
							defaultValue={context.currentAccount.emailAlerts}
							onChange={handleChange}
						>
							<option value="PENDING">PENDING</option>
							<option value="OPT-IN">OPT-IN</option>
							<option value="OPT-OUT">OPT-OUT</option>
						</select>
					</label>
				</div>
			</fieldset>
		</form>
	);
};
