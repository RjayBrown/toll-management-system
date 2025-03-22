import { useEffect } from "react";
import { format } from "../../../util/format";
import { accountDetails } from "../../../util/account-details";

import { DashboardButton } from "../../buttons/DashboardButton";

export const Table = ({ table, search, setShowForm }) => {
	// const [selectedRows, setSelectedRows] = useState([]);
	useEffect(() => {
		// console.log("adding effect");
		const tableRows = document.querySelectorAll(".table-row");
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

		const addHighlightOnClick = (tableRows) => {
			tableRows.forEach((row) => {
				row.addEventListener("click", () => toggleHighlight(row, tableRows));
			});
		};
		addHighlightOnClick(tableRows);

		return () => {
			tableRows.forEach(
				(rowElement) =>
					rowElement.removeEventListener("click", () =>
						toggleHighlight(row, tableRows)
					)
				// console.log("cleaning up effect")
			);
		};
	});
	return (
		<>
			{/*
			DYNAMIC TABLE

			COLUMNS: Heading from account details object passed in as props
			ROWS: Sort by most recent account details and create table rows for each entry
			CELLS: Conditionally display data in each cell within a textarea element, a checkbox, or as formatted (text/number/date)
			*/}
			<section className="card" tabIndex={0}>
				<table className="grid__table">
					<caption>{accountDetails[[table]].title}</caption>
					<thead>
						<tr>
							{accountDetails[[table]].details.map((column, i) => (
								<th
									key={i}
									style={
										column.label === "Description" ? { width: "35rem" } : null
									}
								>
									{column.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{search.length ? (
							search
								.sort((a, b) => b["_id"].localeCompare(a["_id"]))
								.map((result, idx) => (
									<tr className="table-row" key={result["_id"]}>
										{accountDetails[[table]].details.map((cell, i) => (
											<td className="cell" key={i}>
												<label htmlFor={cell.data}>
													{cell.data === "description" ? (
														<textarea
															value={`${
																search[[idx]][[cell.data]]
															}`.toUpperCase()}
															disabled
														></textarea>
													) : cell.type === "checkbox" ? (
														<input
															type={cell.type}
															value={`${
																search[[idx]][[cell.data]]
															}`.toUpperCase()}
															checked={
																`${search[[idx]][[cell.data]]}` === "true"
																	? true
																	: false
															}
															disabled
														/>
													) : cell.type === "phone" ? (
														format.phoneNumber(`${search[[idx]][[cell.data]]}`)
													) : !search[[idx]][[cell.data]] ? (
														""
													) : cell.type === "date" ? (
														format.dateTime(`${search[[idx]][[cell.data]]}`)
													) : cell.type === "number" ? (
														format.currency(search[[idx]][[cell.data]])
													) : !search[[idx]][[cell.data]] ? (
														""
													) : (
														`${search[[idx]][[cell.data]]}`.toUpperCase()
													)}
												</label>
											</td>
										))}
									</tr>
								))
						) : search.length === 0 ? null : (
							<tr className="table-row">
								{accountDetails[[table]].details.map((cell, i) => (
									<td className="cell" key={i}>
										<label htmlFor={cell.data}>
											{cell.type === "checkbox" ? (
												<input
													type={cell.type}
													name={cell.data}
													value={`${search[[cell.data]]}`.toUpperCase()}
													disabled
												/>
											) : cell.type === "date" ? (
												format.dateTime(`${search[[cell.data]]}`)
											) : !search[[cell.data]] ? (
												""
											) : (
												`${search[[cell.data]]}`.toUpperCase()
											)}
										</label>
									</td>
								))}
							</tr>
						)}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={accountDetails[[table]].details.length}>
								{setShowForm && (
									<DashboardButton onClick={() => setShowForm((prev) => !prev)}>
										{table === "notes"
											? `Add ${accountDetails[[table]].title.slice(
													0,
													accountDetails[[table]].title.length - 1
											  )}`
											: `Update ${accountDetails[[table]].title}`}
									</DashboardButton>
								)}
							</td>
						</tr>
					</tfoot>
				</table>
			</section>
		</>
	);
};
