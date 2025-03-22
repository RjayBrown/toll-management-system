import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { fetchData } from "../../../util/api";
import { format } from "../../../util/format";

import { Loading } from "../../global/Loading";
import { ReadOnlyAccountDetails } from "../forms/accounts/ReadOnlyAccountDetails";

export const AccountSearchResultsPage = () => {
	const context = useOutletContext();
	const [accounts, setAccounts] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getMatchingAccounts = async () => {
			const response = await fetchData.accounts({
				accountNumber: 28439234,
			});
			setAccounts(response.accounts);
			setIsLoading(false);
		};

		getMatchingAccounts();
	}, []);

	useEffect(() => {
		const accountRows = document.querySelectorAll(".table-row");
		const toggleHighlight = (rowElement, arrayOfRowElements) => {
			if (rowElement && !rowElement.classList.contains("selected")) {
				rowElement.classList.add("selected");
			}

			arrayOfRowElements.forEach((row) => {
				if (row !== rowElement) {
					row.classList.remove("selected");
				}
			});
		};

		const addHighlightOnClick = (arrayOfTableRows) => {
			arrayOfTableRows.forEach((row) => {
				row.addEventListener("click", () =>
					toggleHighlight(row, arrayOfTableRows)
				);
			});
		};
		addHighlightOnClick(accountRows);

		return () => {
			accountRows.forEach((rowElement) =>
				rowElement.removeEventListener("click", () =>
					toggleHighlight(row, arrayOfTableRows)
				)
			);
		};
	}, [isLoading]);

	return isLoading ? (
		<Loading />
	) : (
		<>
			<section className="card" tabIndex={0}>
				<table className="grid__table">
					<caption
						onClick={() => {
							context.setCurrentAccount(null);
						}}
					>
						Account Search Results
					</caption>
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
							? accounts.map((account, i) => {
									return (
										<tr
											key={account.accountNumber}
											className="table-row"
											onClick={() => {
												context.setCurrentAccount(account);
											}}
										>
											<td>
												<NavLink
													to={"../account/contacts"}
													className="link"
												>{`${account.demographics.firstName.toUpperCase()} ${account.demographics.lastName.toUpperCase()}`}</NavLink>
											</td>
											<td>{`${account.accountType}`}</td>
											<td>
												<NavLink
													className="link"
													to={"../account"}
												>{`${account.accountNumber}`}</NavLink>
											</td>
											<td>{`${account.accountStatus}`}</td>

											<td>
												{format.phoneNumber(account.demographics.primaryPhone)}
											</td>
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
							<td colSpan={10}></td>
						</tr>
					</tfoot>
				</table>
			</section>
			<ReadOnlyAccountDetails account={context.currentAccount} />
		</>
	);
};
