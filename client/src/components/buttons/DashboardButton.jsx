export const DashboardButton = ({ onClick, children }) => {
	return (
		<button className="btn__dashboard" onClick={onClick}>
			{children}
		</button>
	);
};
