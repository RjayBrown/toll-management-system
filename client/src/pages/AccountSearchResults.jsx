import { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import AccountDetailsTop from "../components/forms/AccountDetailsTop";
import { Link } from "react-router-dom";

const AccountSearchResults = () => {
	const [accounts, setAccounts] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/api/accounts/search")
			.then((res) => res.json())
			.then((data) => {
				setAccounts(data.accounts);
				console.log(data.accounts);
			});
	}, []);

	/* NEED TO ADD ROW HIGHLIGHT STYLES */

	return (
		<>
			<section className="card" tabIndex={0}>
				<table className="grid__table search-results">
					<caption>Account Search Results</caption>
					<thead>
						<tr>
							<th>Account Name</th>
							<th>Account Number</th>
							<th>Account Type</th>
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
										<tr key={account.accountNumber} className="acct-row">
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.demographics.firstName.toUpperCase()} ${account.demographics.lastName.toUpperCase()}`}</Link>
											</td>
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.accountNumber}`}</Link>
											</td>
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.accountType}`}</Link>
											</td>
											<td>
												{" "}
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.accountStatus}`}</Link>
											</td>
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.demographics.phone}`}</Link>
											</td>
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.demographics.address.addressLine1.toUpperCase()}`}</Link>
											</td>
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.demographics.address.city.toUpperCase()}`}</Link>
											</td>
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.demographics.address.state.toUpperCase()}`}</Link>
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
			<AccountDetailsTop />
		</>
	);
};

export default AccountSearchResults;
