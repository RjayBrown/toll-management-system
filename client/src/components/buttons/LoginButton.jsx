export const LoginButton = ({ onClick, children }) => {
	return (
		<button className="btn__login" tabIndex={1} onClick={onClick}>
			{children}
		</button>
	);
};
