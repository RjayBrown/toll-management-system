import React from "react";
import { IoMdStar } from "react-icons/io";

import SidebarButton from "../../buttons/SidebarButton";

const AccountDetails = () => {
	const formatNum = (num) => {
		const formatted = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(num);

		return num >= 0 ? formatted : `(${formatted})`;
	};

	const formatDate = (date) => {
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		}).format(date);
	};
	return (
		<section className="grid grid__account card" tabIndex={0}>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="agency">
					<span>Agency:</span>
					<input
						type="text"
						className="big ff"
						name="agency"
						value={"MTA"}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="accountName">
					<span>Acct Name:</span>
					<input
						type="text"
						className="big"
						name="accountName"
						value={"JOHN DOE"}
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
						value={"PUNREG"}
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
						value={"ACTIVE"}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="paymentMethod">
					<span>Pymt Method:</span>
					<input
						type="text"
						className="big"
						name="paymentMethod"
						value={"CASH"}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="securityQA">
					<span>Security QA:</span>
					<textarea
						type="text"
						className="big"
						name="securityQA"
						value={"What is your PIN Number: 2929"}
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
						value={123456789}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfDevices">
					<span># of Devices:</span>
					<input
						type="text"
						className="small"
						name="numOfDevices"
						value={0}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfVehicles">
					<span># of Vehicles:</span>
					<input
						type="text"
						className="small"
						name="numOfVehicles"
						value={0}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfViolations">
					<span># of Open Viol:</span>
					<input
						type="text"
						className="small"
						name="numOfViolations"
						value={0}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfTolls">
					<span># of Open Bill:</span>
					<input
						type="text"
						className="small"
						name="numOfTolls"
						value={0}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="serviceRequests">
					<span># of Open SR:</span>
					<input
						type="text"
						className="small"
						name="serviceRequests"
						value={0}
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
						value={formatNum(29)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="tollBillBalance">
					<span>Toll Bill Bal:</span>
					<input
						type="text"
						className="small"
						name="tollBillBalance"
						value={formatNum(0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="violationBalance">
					<span>Viol Bal:</span>
					<input
						type="text"
						className="small"
						name="violationBalance"
						value={formatNum(0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="violationFees">
					<span>Viol Fees:</span>
					<input
						type="text"
						className="small"
						name="violationFees"
						value={formatNum(0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="billOverpayment">
					<span>Bill OvrPmt:</span>
					<input
						type="text"
						className="small"
						name="billOverpayment"
						value={formatNum(0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="deviceDeposit">
					<span>Device Dep:</span>
					<input
						type="text"
						className="small"
						name="deviceDeposit"
						value={formatNum(16)}
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
						value={formatDate(1737664806655)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="lastTollDate">
					<span>Last Toll Date:</span>
					<input
						type="text"
						className="med"
						name="lastTollDate"
						value={formatDate(1737664806655)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="tollBillDueDate">
					<span>Toll Bill Due Date:</span>
					<input
						type="text"
						className="med"
						name="tollBillDueDate"
						value={formatDate(1737664806655)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="escalationDate">
					<span>Toll Bill Esc Date:</span>
					<input
						type="text"
						className="med"
						name="escalationDate"
						value={formatDate(1737664806655)}
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
						value={formatDate(1737664806655)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="deviceDeposit">
					<span>Device Dep:</span>
					<input
						type="text"
						className="med"
						name="deviceDeposit"
						value={formatDate(1737664806655)}
						readOnly={true}
					/>
				</label>
			</form>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="suspendedNY">
					<span>Susp NY:</span>
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
				<SidebarButton>Toll History</SidebarButton>
				<SidebarButton>Financials</SidebarButton>
				<SidebarButton>Toll Bills</SidebarButton>
				<SidebarButton>Violations</SidebarButton>
				<SidebarButton>Add Note</SidebarButton>
			</div>
		</section>
	);
};

export default AccountDetails;
