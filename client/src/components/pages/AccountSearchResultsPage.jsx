import { NavLink, useOutletContext } from "react-router-dom";
import { useHighlightRows } from "../../hooks/useHighlightRows";

import { format } from "../../util/format";

import { Loading } from "../global/Loading";
import { ReadOnlyAccountDetails } from "../forms/ReadOnlyAccountDetails";

export const AccountSearchResultsPage = () => {
	const context = useOutletContext();

	useHighlightRows(".table-row", context.isLoading);

	return context.isLoading ? (
		<Loading />
	) : (
		<>
			<section className="card" tabIndex={0}>
				<table className="grid__table">
					<caption
						onClick={() => {
							context.setCurrentAccount(null);
							context.setAccounts(null);
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
						{context.accounts
							? context.accounts.map((account, i) => {
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
												{`${account.demographics.address[0].addressLine1.toUpperCase()}`}
											</td>
											<td>
												{`${account.demographics.address[0].city.toUpperCase()}`}
											</td>
											<td>
												{`${account.demographics.address[0].state.toUpperCase()}`}
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
