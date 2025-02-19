export const formatCurrency = (num) => {
	const formatted = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(num);

	return num >= 0 ? formatted : `(${formatted})`;
};

export const formatDate = (date) => {
	return new Date(date).toLocaleString().split(",")[0];
};
