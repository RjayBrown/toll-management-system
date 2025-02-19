import React from "react";
import { IoMdStar } from "react-icons/io";
import SideModalButton from "../../../buttons/SideModalButton";

import { formatCurrency, formatDate } from "../../../../util";

const AccountDetails = ({ account }) => {
	return (
		<section className="grid grid__account card" tabIndex={0}>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="agency">
					<span>Agency:</span>
					<input
						type="text"
						className="big"
						name="agency"
						value={account ? account.agency : undefined}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="accountName">
					<span>Acct Name:</span>
					<input
						type="text"
						className="big"
						name="accountName"
						value={
							account
								? `${account.demographics.firstName.toUpperCase()} ${account.demographics.lastName.toUpperCase()}`
								: undefined
						}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="accountType">
					<span>
						<IoMdStar color="red" /> Acct Type:
					</span>
					<input
						type="text"
						className="big"
						name="accountType"
						value={account ? account.accountType : undefined}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="status">
					{/* dynamic text color based on status */}
					<span>Acct Status:</span>
					<input
						type="text"
						className="big status"
						name="status"
						value={account ? account.accountStatus : undefined}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="paymentMethod">
					<span>Pymt Method:</span>
					<input
						type="text"
						className="big"
						name="paymentMethod"
						value={account ? account.payMethod : undefined}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="securityQA">
					<span>Security QA:</span>
					<textarea
						type="text"
						className="big"
						name="securityQA"
						value={
							account
								? `${
										account.securityQuestion
								  } ${account.securityAnswer.toUpperCase()}`
								: undefined
						}
						style={{ resize: "vertical" }}
						readOnly={true}
					/>
				</label>
			</form>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="accountNumber">
					<span>
						<IoMdStar color="red" /> Acct #:
					</span>
					<input
						type="text"
						className="small"
						name="accountNumber"
						value={account ? account.accountNumber : undefined}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfDevices">
					<span># of Devices:</span>
					<input
						type="text"
						className="small"
						name="numOfDevices"
						value={account ? account.devices.length : undefined}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfVehicles">
					<span># of Vehicles:</span>
					<input
						type="text"
						className="small"
						name="numOfVehicles"
						value={account ? account.vehicles.length : undefined}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfViolations">
					<span># of Open Viol:</span>
					<input
						type="text"
						className="small"
						name="numOfViolations"
						value={
							account
								? account.tolls.filter((toll) => toll.tollStatus === "VIOL")
										.length
								: undefined
						}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfTolls">
					<span># of Open Tolls:</span>
					<input
						type="text"
						className="small"
						name="numOfTolls"
						value={
							account
								? account.tolls.filter((toll) => toll.tollStatus === "OPEN")
										.length
								: undefined
						}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="serviceRequests">
					<span># of Open SR:</span>
					<input
						type="text"
						className="small"
						name="serviceRequests"
						value={
							account
								? account.serviceRequest.filter((sr) => sr.status === "Open")
										.length
								: undefined
						}
						readOnly={true}
					/>
				</label>
			</form>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="accountBalance">
					<span>Acct Bal:</span>
					<input
						type="text"
						className="small"
						name="accountBalance"
						value={formatCurrency(account ? account.accountBalance : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="tollBillBalance">
					<span>Toll Bill Bal:</span>
					<input
						type="text"
						className="small"
						name="tollBillBalance"
						value={formatCurrency(account ? account.tollBillBalance : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="violationBalance">
					<span>Viol Bal:</span>
					<input
						type="text"
						className="small"
						name="violationBalance"
						value={formatCurrency(account ? account.violationBalance : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="violationFees">
					<span>Viol Fees:</span>
					<input
						type="text"
						className="small"
						name="violationFees"
						value={formatCurrency(account ? account.violationFees : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="billOverpayment">
					<span>Bill OvrPmt:</span>
					<input
						type="text"
						className="small"
						name="billOverpayment"
						value={formatCurrency(account ? account.billOverpayment : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="deviceDeposit">
					<span>Device Dep:</span>
					<input
						type="text"
						className="small"
						name="deviceDeposit"
						value={formatCurrency(
							account
								? account.devices.every((device) => device.deposit === 16)
									? 16
									: 22
								: 0
						)}
						readOnly={true}
					/>
				</label>
			</form>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="lastPaymentDate">
					<span>Last Pmt Date:</span>
					<input
						type="text"
						className="med"
						name="lastPaymentDate"
						value={
							account
								? account.lastPaymentDate
									? formatDate(account.lastPaymentDate)
									: "N/A"
								: undefined
						}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="lastTollDate">
					<span>Last Toll Date:</span>
					<input
						type="text"
						className="med"
						name="lastTollDate"
						value={
							account
								? account.tolls
									? formatDate(account.tolls[0].postedDate)
									: "N/A"
								: undefined
						}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="tollBillDueDate">
					<span>Toll Bill Due Date:</span>
					<input
						type="text"
						className="med"
						name="tollBillDueDate"
						value={
							account
								? account.tolls
									? formatDate(account.tolls[0].dueDate)
									: "N/A"
								: undefined
						}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="escalationDate">
					<span>Toll Bill Esc Date:</span>
					<input
						type="text"
						className="med"
						name="escalationDate"
						value={
							account
								? account.tolls[0].escalationDate
									? formatDate(account.tolls[0].escalationDate)
									: "N/A"
								: undefined
						}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="accountOpenDate">
					<span>
						<IoMdStar color="red" /> Acct Open Date:
					</span>
					<input
						type="text"
						className="med"
						name="accountOpenDate"
						value={account ? formatDate(account.accountOpenDate) : undefined}
						readOnly={true}
					/>
				</label>
			</form>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="suspendedNY">
					<span>Reg Susp:</span>
					<input
						className="checkbox"
						type="checkbox"
						name="suspendedNY"
						disabled
					/>
				</label>
				<label className="flex__row" htmlFor="oosHold">
					<span>OOS Hold:</span>
					<input className="checkbox" type="checkbox" name="oosHold" disabled />
				</label>
			</form>
			<div className="flex__col btns">
				<SideModalButton>Toll History</SideModalButton>
				<SideModalButton>Financials</SideModalButton>
				<SideModalButton>Toll Bills</SideModalButton>
				<SideModalButton>Violations</SideModalButton>
				<SideModalButton>Add Note</SideModalButton>
			</div>
		</section>
	);
};

export default AccountDetails;
