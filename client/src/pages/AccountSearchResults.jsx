import { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";

import AccountDetailsTop from "../components/forms/accounts/AccountDetailsTop";
import Loading from "../components/global/Loading";

import fetchData from "../api";

const AccountSearchResults = () => {
	const [accounts, setAccounts] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	// const [params, setParams] = useParams();

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
										<tr key={account.accountNumber} className="acct-row">
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
													className="link"
												>{`${account.demographics.firstName.toUpperCase()} ${account.demographics.lastName.toUpperCase()}`}</Link>
											</td>
											<td>
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.accountType}`}</Link>
											</td>
											<td>
												<Link
													className="link"
													to={`../info/:${account.accountNumber}`}
												>{`${account.accountNumber}`}</Link>
											</td>
											<td>
												{" "}
												<Link
													to={`../info/:${account.accountNumber}`}
												>{`${account.accountStatus}`}</Link>
											</td>
											<td>
												<Link to={`../info/:${account.accountNumber}`}>
													{formatPhoneNumber(account.demographics.phone)}
												</Link>
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
