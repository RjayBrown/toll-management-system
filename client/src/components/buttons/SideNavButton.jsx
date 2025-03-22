export const SideNavButton = ({ onClick, children }) => {
	return (
		<button className="btn__sidenav" onClick={onClick}>
			{children}
		</button>
	);
};
