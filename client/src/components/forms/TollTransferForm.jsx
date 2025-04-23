import { useOutletContext } from "react-router-dom";

export const TollTransferForm = () => {
	const context = useOutletContext();

	return (
		<>
			<h1>Toll Transfer Form</h1>
			<h3>Alert and navigate to all tolls if none selected</h3>
		</>
	);
};
