import { useNavigate, useOutletContext } from "react-router-dom";
import { useHighlightRows } from "../../../hooks/useHighlightRows";

import { format } from "../../../util/format";
import { tableConfig } from "../../../util/table-config";

import { DashboardButton } from "../../buttons/DashboardButton";

export const Table = ({ table, search, formState }) => {
	const context = useOutletContext();
	useHighlightRows(".table-row", formState.selectedRow);
	const navigate = useNavigate();

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
					<caption>{tableConfig[table].title}</caption>
					<thead>
						<tr>
							{tableConfig[table].details.map((column, i) => (
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
							search.map((result, idx) => (
								<tr
									className="table-row"
									key={result["_id"]}
									onClick={
										formState.selectedRow >= 0
											? () => formState.setSelectedRow(idx)
											: null
									}
								>
									{tableConfig[table].details.map((cell, i) => (
										<td className="cell" key={i}>
											<label htmlFor={cell.data}>
												{cell.data === "description" ? (
													<textarea
														value={`${search[idx][cell.data]}`.toUpperCase()}
														disabled
													></textarea>
												) : cell.type === "checkbox" ? (
													<input
														type={cell.type}
														value={`${search[idx][cell.data]}`.toUpperCase()}
														checked={
															`${search[idx][cell.data]}` === "true"
																? true
																: false
														}
														disabled
													/>
												) : cell.type === "phone" ? (
													format.phoneNumber(`${search[idx][cell.data]}`)
												) : !search[idx][cell.data] ? (
													""
												) : cell.type === "date" ? (
													format.dateTime(`${search[idx][cell.data]}`)
												) : cell.type === "number" ? (
													format.currency(search[idx][cell.data])
												) : !search[idx][cell.data] ? (
													""
												) : (
													`${search[idx][cell.data]}`.toUpperCase()
												)}
											</label>
										</td>
									))}
								</tr>
							))
						) : search.length === 0 ? null : (
							<tr className="table-row">
								{tableConfig[table].details.map((cell, i) => (
									<td className="cell" key={i}>
										<label htmlFor={cell.data}>
											{cell.type === "checkbox" ? (
												<input
													type={cell.type}
													name={cell.data}
													value={`${search[cell.data]}`.toUpperCase()}
													disabled
												/>
											) : cell.type === "phone" ? (
												format.phoneNumber(`${search[cell.data]}`)
											) : !search[cell.data] ? (
												""
											) : cell.type === "date" ? (
												format.dateTime(`${search[cell.data]}`)
											) : cell.type === "number" ? (
												format.currency(search[cell.data])
											) : !search[cell.data] ? (
												""
											) : (
												`${search[cell.data]}`.toUpperCase()
											)}
										</label>
									</td>
								))}
							</tr>
						)}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={tableConfig[table].details.length}>
								{formState ? (
									table === "tolls" ? (
										<DashboardButton className="btn__dashboard">
											Dispute
										</DashboardButton>
									) : table === "devices" ? (
										<DashboardButton
											className="btn__dashboard"
											onClick={() => navigate("./request")}
										>
											Request Device
										</DashboardButton>
									) : (
										<>
											<DashboardButton
												className={`btn__dashboard ${
													formState.updateForm.type === "add" &&
													formState.updateForm.show
														? "selected"
														: null
												}`}
												onClick={() => {
													formState.setUpdateForm
														? formState.setUpdateForm({
																type: "add",
																show: true,
														  })
														: null;
												}}
												disabled={
													tableConfig[table].permissions.canAdd ? false : true
												}
											>
												Add New
											</DashboardButton>
											<DashboardButton
												className={`btn__dashboard ${
													formState.updateForm.type === "modify" &&
													formState.updateForm.show
														? "selected"
														: null
												}`}
												onClick={() => {
													formState.setUpdateForm
														? formState.setUpdateForm({
																type: "modify",
																show: true,
														  })
														: null;
												}}
												disabled={
													tableConfig[table].permissions.canModify
														? false
														: true
												}
											>
												Update
											</DashboardButton>
											{/* TODO: Add delete logic */}
											<DashboardButton
												className={`btn__dashboard close`}
												onClick={() => {
													formState.setUpdateForm
														? formState.setUpdateForm({
																type: null,
																show: false,
														  })
														: null;
												}}
												disabled={
													tableConfig[table].permissions.canDelete
														? false
														: true
												}
											>
												Delete
											</DashboardButton>
										</>
									)
								) : null}
							</td>
						</tr>
					</tfoot>
				</table>
			</section>
		</>
	);
};
