import { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { NavLink, useOutletContext } from "react-router-dom";

import AccountDetails from "../../forms/accounts/AccountDetails";
import Loading from "../Loading";

import fetchData from "../../../api";

const AccountSearchResults = () => {
	const [accounts, setAccounts] = useOutletContext(null);
	const [currentAccount, setCurrentAccount] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getAccounts = async () => {
			const response = await fetchData.accounts();
			setAccounts(response.accounts);
		};

		getAccounts();

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	useEffect(() => {
		const rows = document.querySelectorAll(".acct-row");
		rows.forEach((row, i, rows) => {
			row.addEventListener("click", () => {
				row.classList.add("on");
			});
		});
	}, [accounts]);

	const formatPhoneNumber = (nums) => {
		const areaCode = nums
			.toString()
			.split("")
			.filter((num, i) => i < 3)
			.join("");
		const first3 = nums
			.toString()
			.split("")
			.filter((num, i) => i >= 3 && i < 6)
			.join("");
		const last4 = nums
			.toString()
			.split("")
			.filter((num, i) => i >= 6 && i <= 9)
			.join("");

		return `(${areaCode}) ${first3}-${last4}`;
	};

	/* NEED TO ADD ROW HIGHLIGHT STYLES */

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
							<th>NYS Susp</th>
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
													to={`../info/${account.accountNumber}`}
													className="link"
												>{`${account.demographics.firstName.toUpperCase()} ${account.demographics.lastName.toUpperCase()}`}</NavLink>
											</td>
											<td>{`${account.accountType}`}</td>
											<td>
												<NavLink
													className="link"
													to={`../info/${account.accountNumber}`}
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
					<tfoot>
						<tr>
							<td colSpan={10}>
								<TiArrowSortedUp />
								<TiArrowSortedDown />
							</td>
						</tr>
					</tfoot>
				</table>
			</section>
			<AccountDetails account={currentAccount} />
		</>
	);
};

export default AccountSearchResults;
