export const LogOutButton = ({ onClick, children }) => {
	return (
		<button className="btn__logout" onClick={onClick}>
			{children}
		</button>
	);
};
