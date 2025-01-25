import { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import AccountDetailsTop from "../components/forms/AccountDetailsTop";

const AccountSearchResults = () => {
	useEffect(() => {
		const row = document.querySelector(".acct-row");
		const toggleBg = () => {
			row.classList.contains("on")
				? row.classList.remove("on")
				: row.classList.add("on");
		};
		row.addEventListener("click", toggleBg);

		return () => {
			row.removeEventListener("click", toggleBg);
		};
	}, []);
	return (
		<>
			<section className="card" tabIndex={0}>
				<table className="grid__table search-results">
					<caption>Account Search Results</caption>
					<thead>
						<tr>
							<th>
								<a href="#">Account Name</a>
							</th>
							<th>
								<a href="#">Account Number</a>
							</th>
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
						{/* Accounts returned from search */}
						<tr className="acct-row">
							<td>JOHN DOE</td>
							<td>123456789</td>
							<td>PRIVATE</td>
							<td>ACTIVE</td>
							<td>347-678-9098</td>
							<td>123 MAIN ST</td>
							<td>NEW YORK</td>
							<td>NY</td>
							<td>
								<input type="checkbox" disabled />
							</td>
							<td>
								<input type="checkbox" disabled />
							</td>
						</tr>
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
