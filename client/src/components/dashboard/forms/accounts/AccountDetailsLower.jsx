import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { formatCurrency, formatDate } from "../../../../util";

const AccountDetailsLower = () => {
	const [currentAccount, setCurrentAccount] = useOutletContext();

	console.log(currentAccount);

	return (
		<section className="flex__col details card" tabIndex={0}>
			<h5 className="title">Account Details</h5>
			<div className="form-table">
				<h5 className="heading">CORRESPONDENCE</h5>
				<form className="flex__row form__details">
					<label className="flex__row" htmlFor="email">
						<span>Email Address:</span>
						<input
							type="email"
							className="big"
							name="email"
							value={currentAccount.demographics.email}
						/>
					</label>
					<label className="flex__row" htmlFor="correspondence">
						<span>Corr Delivery Mode:</span>
						<select
							type="text"
							className="small"
							name="correspondence"
							value={currentAccount.corrDeliveryMode}
						>
							<option value="email">EMAIL</option>
							<option value="mail">MAIL</option>
						</select>
					</label>
					<label className="flex__row" htmlFor="statement">
						<span>Stmt Delivery Mode:</span>
						<select
							type="text"
							className="small"
							name="statement"
							value={currentAccount.stmtDeliveryMode}
						>
							<option value="email">EMAIL</option>
							<option value="mail">MAIL</option>
						</select>
					</label>
					<label className="flex__row" htmlFor="statement">
						<span>Stmt Frequency:</span>
						<select
							type="text"
							className="small"
							name="statement"
							value={currentAccount.stmtFrequency}
						>
							<option value="monthly">MONTHLY</option>
							<option value="bi-monthly">BI-MONTHLY</option>
						</select>
					</label>
				</form>
			</div>
			<div className="form-table">
				<h5 className="heading">REPLENISHMENT</h5>
				<form className="flex__row form__details">
					<label className="flex__row" htmlFor="pay-type">
						<span>Rebill Pay Type:</span>
						<input
							type="text"
							className="big"
							name="pay-type"
							value={currentAccount.payMethod}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="rebill-amt">
						<span>Rebill Amt:</span>
						<input
							type="text"
							className="small"
							name="rebill-amt"
							value={formatCurrency(currentAccount.rebillAmount)}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="set-rebill">
						<span>Set Rebill Amt:</span>
						<input
							type="number"
							className="small"
							name="set-rebill"
							value={undefined}
						/>
					</label>
					<label className="flex__row" htmlFor="rebill-thrsh">
						<span>Rebill Thrsh Amt:</span>
						<input
							type="text"
							className="small"
							name="rebill-thrsh"
							value={
								currentAccount.rebillAmount < 50
									? formatCurrency(10)
									: formatCurrency(currentAccount.rebillAmount * 0.25)
							}
							readOnly={true}
						/>
					</label>
				</form>
			</div>
			<div className="form-table">
				<h5 className="heading">REVOCATION/COLLECTION</h5>
				<form className="flex__row form__details">
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
				</form>
			</div>
			<div className="form-table">
				<h5 className="heading">MISCELLANEOUS</h5>
				<form className="flex__row form__details">
					<label className="flex__row" htmlFor="challenge-q">
						<span>Challenge Q:</span>
						<input
							type="text"
							className="big"
							name="challenge-q"
							value={currentAccount.securityQuestion}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="challenge-a">
						<span>Challenge Ans:</span>
						<input
							type="text"
							className="small"
							name="challenge-a"
							value={currentAccount.securityAnswer.toUpperCase()}
							readOnly={true}
						/>
					</label>
					<label className="flex__row" htmlFor="alerts">
						<span>Mobile Alerts:</span>
						<select
							type="text"
							className="small"
							name="alerts"
							value={currentAccount.mobileAlerts}
						>
							<option value="pending">PENDING</option>
							<option value="opt-in">OPT-IN</option>
							<option value="opt-out">OPT-OUT</option>
						</select>
					</label>
					<label className="flex__row" htmlFor="alerts">
						<span>Toll Email Alerts:</span>
						<select
							type="text"
							className="small"
							name="alerts"
							value={currentAccount.tollEmailAlerts}
						>
							<option value="pending">PENDING</option>
							<option value="opt-in">OPT-IN</option>
							<option value="opt-out">OPT-OUT</option>
						</select>
					</label>
				</form>
			</div>
		</section>
	);
};

export default AccountDetailsLower;
