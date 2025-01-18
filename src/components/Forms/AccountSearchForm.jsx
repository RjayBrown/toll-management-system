import React from "react";
import AccountSearchButton from "../buttons/AccountSearchButton";

const AccountSearchForm = () => {
	return (
		<form action="" className="flex__col form__search">
			<caption>Search</caption>
			<label for="account-number">
				<span>Account Number:</span>
				<input type="text" name="account-number" />
			</label>
			<label for="last-name">
				<span>Last Name:</span>
				<input type="text" />
			</label>
			<label for="first-name">
				<span>First Name:</span>
				<input type="text" name="first-name" />
			</label>
			<label for="phone">
				<span>Day Phone:</span>
				<input type="phone" name="phone" pattern="[0-9]{10}" />
			</label>
			<label for="device">
				<span>Device Number:</span>
				<input type="text" name="device" />
			</label>
			<label for="plate">
				<span>Plate Number:</span>
				<input type="text" id="plate" />
			</label>
			<label for="violation">
				<span>Violation Number:</span>
				<input type="text" name="violation " />
			</label>
			<label for="invoice">
				<span>Invoice Number:</span>
				<input type="text" name="invoice" />
			</label>
			<AccountSearchButton />
		</form>
	);
};

export default AccountSearchForm;
