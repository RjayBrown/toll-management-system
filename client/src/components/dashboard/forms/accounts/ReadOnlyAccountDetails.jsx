import { useNavigate } from "react-router-dom";
import { format } from "../../../../util/format";

import { IoMdStar } from "react-icons/io";
import { SideNavButton } from "../../../buttons/SideNavButton";

export const ReadOnlyAccountDetails = ({ account }) => {
	const navigate = useNavigate();

	const goToRoute = (route) => {
		navigate(`/dashboard/main/${route}`);
	};

	const setStatusColor = (status) => {
		if (status === "ACTIVE") {
			return { color: "green" };
		} else if (status === "CLOSE-PEND") {
			return { color: "goldenrod" };
		} else {
			return { color: "red" };
		}
	};
	return (
		<section className="grid grid__account card" tabIndex={0}>
			<form className="flex__col form__readonly">
				<label className="flex__row" htmlFor="agency">
					<span>Agency:</span>
					<input
						type="text"
						className="big"
						name="agency"
						value={account ? account.agency : ""}
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
								: ""
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
						value={account ? account.accountType : ""}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="status">
					<span>Acct Status:</span>
					<input
						type="text"
						className="big status"
						name="status"
						value={account ? account.accountStatus : ""}
						style={account ? setStatusColor(account.accountStatus) : null}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="paymentMethod">
					<span>Pymt Method:</span>
					<input
						type="text"
						className="big"
						name="paymentMethod"
						value={account ? account.payMethod : ""}
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
								: ""
						}
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
						value={account ? account.accountNumber : ""}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfDevices">
					<span># of Devices:</span>
					<input
						type="text"
						className="small"
						name="numOfDevices"
						value={account ? account.devices.length : ""}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="numOfVehicles">
					<span># of Vehicles:</span>
					<input
						type="text"
						className="small"
						name="numOfVehicles"
						value={account ? account.vehicles.length : ""}
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
								: ""
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
								: ""
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
								: ""
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
						value={format.currency(account ? account.accountBalance : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="tollBillBalance">
					<span>Toll Bill Bal:</span>
					<input
						type="text"
						className="small"
						name="tollBillBalance"
						value={format.currency(account ? account.tollBillBalance : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="violationBalance">
					<span>Viol Bal:</span>
					<input
						type="text"
						className="small"
						name="violationBalance"
						value={format.currency(account ? account.violationBalance : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="violationFees">
					<span>Viol Fees:</span>
					<input
						type="text"
						className="small"
						name="violationFees"
						value={format.currency(account ? account.violationFees : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="billOverpayment">
					<span>Bill OvrPmt:</span>
					<input
						type="text"
						className="small"
						name="billOverpayment"
						value={format.currency(account ? account.billOverpayment : 0)}
						readOnly={true}
					/>
				</label>
				<label className="flex__row" htmlFor="deviceDeposit">
					<span>Device Dep:</span>
					<input
						type="text"
						className="small"
						name="deviceDeposit"
						value={format.currency(
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
									? format.date(account.lastPaymentDate)
									: "N/A"
								: ""
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
								? account.tolls[0]
									? format.date(account.tolls[0].postedDate)
									: "N/A"
								: ""
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
								? account.tolls[0]
									? format.date(account.tolls[0].dueDate)
									: "N/A"
								: ""
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
								? account.tolls[0]
									? format.date(account.tolls[0].escalationDate)
									: "N/A"
								: ""
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
						value={account ? format.date(account.accountOpenDate) : ""}
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
				<SideNavButton
					onClick={() =>
						account
							? goToRoute("tolls/all")
							: alert("ERROR: Unable to navigate - account not selected")
					}
				>
					Toll History
				</SideNavButton>
				<SideNavButton
					onClick={() =>
						account
							? goToRoute("tolls/all/invoices")
							: alert("ERROR: Unable to navigate - account not selected")
					}
				>
					Invoices
				</SideNavButton>
				<SideNavButton
					onClick={() =>
						account
							? goToRoute("tolls/all/violations")
							: alert("ERROR: Unable to navigate - account not selected")
					}
				>
					Violations
				</SideNavButton>
				<SideNavButton
					onClick={() =>
						account
							? goToRoute("tolls/transfer")
							: alert("ERROR: Unable to navigate - account not selected")
					}
				>
					Transfer Tolls
				</SideNavButton>
				<SideNavButton
					onClick={() =>
						account
							? goToRoute("service-request")
							: alert("ERROR: Unable to navigate - account not selected")
					}
				>
					Service Request
				</SideNavButton>
			</div>
		</section>
	);
};
