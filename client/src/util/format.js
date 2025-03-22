export const format = {
	currency(rawNumber) {
		const formattedCurrency = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(rawNumber);

		return rawNumber >= 0 ? formattedCurrency : `(${formattedCurrency})`;
	},

	date(rawDate) {
		const formattedDate = new Date(rawDate).toLocaleString().split(",")[0];
		return formattedDate;
	},

	dateTime(rawDate) {
		const formattedDate = new Date(rawDate).toLocaleString();
		return formattedDate;
	},

	phoneNumber(rawNumber) {
		const splitByIndex = (nums, startIndex, endIndex = nums.length) => {
			return nums.toString().split("").slice(startIndex, endIndex).join("");
		};
		const areaCode = splitByIndex(rawNumber, 0, 3);
		const first3 = splitByIndex(rawNumber, 3, 6);
		const last4 = splitByIndex(rawNumber, 6);

		const formattedPhoneNumber = `(${areaCode}) ${first3}-${last4}`;

		return formattedPhoneNumber;
	},
};
