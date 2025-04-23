import { useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { useValidateLocation } from "../../hooks/useValidateLocation";

import { ReadOnlyAccountDetails } from "../forms/ReadOnlyAccountDetails";
import { TollDetailsNavbar } from "../navigation/accounts/TollDetailsNavbar";
import { TollDetailsSubNavbar } from "../navigation/accounts/TollDetailsSubNavbar";
import { Table } from "../dashboard/cards/Table";

export const TollsPage = () => {
	const context = useOutletContext();

	const isDefaultPath = useValidateLocation("/dashboard/main/tolls", "all");

	return context.currentAccount ? (
		<>
			<ReadOnlyAccountDetails account={context.currentAccount} />
			<TollDetailsNavbar isDefaultPath={isDefaultPath} />
			{isDefaultPath ? (
				<>
					<TollDetailsSubNavbar isDefaultPath={isDefaultPath} />
					<TollList />
				</>
			) : (
				<Outlet context={context} />
			)}
		</>
	) : (
		<>
			{alert("ERROR: Unable to navigate - account is not selected")}
			<Navigate to="../" />
		</>
	);
};

export function TollDetailsSection() {
	return (
		<>
			<TollDetailsSubNavbar />
			<Outlet context={context} />
		</>
	);
}

export function TollList({ listType }) {
	const context = useOutletContext();
	console.log(context.currentAccount.tolls);

	const [showDisputeForm, setShowDisputeForm] = useState(false);

	const search =
		listType === "all"
			? context.currentAccount.tolls
			: listType === "invoices"
			? context.currentAccount.tolls.filter((toll) => !toll.violationNumber)
			: listType === "violations"
			? context.currentAccount.tolls.filter((toll) => toll.violationNumber)
			: listType === "collections"
			? context.currentAccount.tolls.filter(
					(toll) => toll.tollStatus === "COLL"
			  )
			: "all";
	const subDoc = "tolls";

	return (
		<>
			<Table
				table={subDoc}
				search={search}
				formState={{
					showDisputeForm,
					setShowDisputeForm,
				}}
			/>
			{/* TODO: Create dispute form */}
		</>
	);
}

export function InvoiceList() {
	const context = useOutletContext();

	const [showDisputeForm, setShowDisputeForm] = useState(false);

	const search = context.currentAccount.tolls.filter(
		(toll) => !toll.violationNumber
	);
	const document = "tolls";

	return (
		<>
			<Table
				table={document}
				search={search}
				formState={{
					showDisputeForm,
					setShowDisputeForm,
				}}
			/>
			{/* TODO: Create dispute form */}
		</>
	);
}

export function ViolationsList() {
	const context = useOutletContext();

	const [showDisputeForm, setShowDisputeForm] = useState(false);

	const search = context.currentAccount.tolls.filter(
		(toll) => toll.violationNumber
	);
	const subDoc = "tolls";

	return (
		<>
			<Table
				table={subDoc}
				search={search}
				formState={{
					showDisputeForm,
					setShowDisputeForm,
				}}
			/>
			{/* TODO: Create dispute form */}
		</>
	);
}

export function CollectionsList() {
	const context = useOutletContext();
	const [showDisputeForm, setShowDisputeForm] = useState(false);

	const search = context.currentAccount.tolls.filter(
		(toll) => toll.tollStatus === "COLL"
	);
	const subDoc = "tolls";

	return (
		<>
			<Table
				table={subDoc}
				search={search}
				formState={{
					showDisputeForm,
					setShowDisputeForm,
				}}
			/>
			{/* TODO: Create dispute form */}
		</>
	);
}
