import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

import AccountDetails from "../forms/accounts/AccountDetails";
import Loading from "../../global/Loading";

import fetchData from "../../../api";

const AccountSearchResults = () => {
	const [accounts, setAccounts] = useOutletContext();
	const [currentAccount, setCurrentAccount] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const formatPhoneNumber = (nums) => {
		const splitByIndex = (arr, startIndex, endIndex = arr.length) => {
			return arr.toString().split("").slice(startIndex, endIndex).join("");
		};
		const areaCode = splitByIndex(nums, 0, 3);
		const first3 = splitByIndex(nums, 3, 6);
		const last4 = splitByIndex(nums, 6);

		return `(${areaCode}) ${first3}-${last4}`;
	};

	useEffect(() => {
		const getMatchingAccounts = async () => {
			const response = await fetchData.accounts(null, null);
			// setTimeout(() => {
			// 	setAccounts(response.accounts);
			// 	setIsLoading(false);
			// }, 1000);
			setAccounts(response.accounts);
			setIsLoading(false);
		};

		getMatchingAccounts();
	}, []);

	useEffect(() => {
		// fix bug - only highlight selected row
		const rows = document.querySelectorAll(".acct-row");
		rows.forEach((row, i, rows) => {
			row.addEventListener("click", () => {
				if (!row.classList.contains("on")) {
					row.classList.add("on");
					console.log("on");
				} else {
					row.className = "acct-row";
					console.log("off");
				}
			});
		});
	}, []);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<section className="card" tabIndex={0}>
				<table className="grid__table search-results">
					<caption>Account Search Results</caption>
					<thead>
						<tr>
							<th>Account Name</th>
							<th>Account Type</th>
							<th>Account Number</th>
							<th>Account Status</th>
							<th>Phone</th>
							<th>Address Line 1</th>
							<th>City</th>
							<th>Zip Code</th>
							<th>Reg Susp</th>
							<th>OOS Hold</th>
						</tr>
					</thead>
					<tbody>
						{accounts
							? accounts.map((account) => {
									return (
										<tr
											key={account.accountNumber}
											className="acct-row"
											onClick={() => {
												setCurrentAccount(account);
											}}
										>
											<td>
												<NavLink
													to={`../info/general?accountNumber=${account.accountNumber}`}
													className="link"
												>{`${account.demographics.firstName.toUpperCase()} ${account.demographics.lastName.toUpperCase()}`}</NavLink>
											</td>
											<td>{`${account.accountType}`}</td>
											<td>
												<NavLink
													className="link"
													to={`../info/general?accountNumber=${account.accountNumber}`}
												>{`${account.accountNumber}`}</NavLink>
											</td>
											<td>{`${account.accountStatus}`}</td>

											<td>{formatPhoneNumber(account.demographics.phone)}</td>
											<td>
												{`${account.demographics.address.addressLine1.toUpperCase()}`}
											</td>
											<td>
												{`${account.demographics.address.city.toUpperCase()}`}
											</td>
											<td>
												{`${account.demographics.address.state.toUpperCase()}`}
											</td>
											<td>
												<input
													type="checkbox"
													defaultChecked={account.suspendedNY}
													disabled
												/>
											</td>
											<td>
												<input
													type="checkbox"
													defaultChecked={account.oosHold}
													disabled
												/>
											</td>
										</tr>
									);
							  })
							: null}
					</tbody>
					<tfoot></tfoot>
				</table>
			</section>
			<AccountDetails account={currentAccount} />
		</>
	);
};

export default AccountSearchResults;
