export const DashboardButton = ({ onClick, children, className, disabled }) => {
	return (
		<button className={className} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};
