export interface TopNavbarProps {}

const TopNavbar: React.FunctionComponent<TopNavbarProps> = () => {
	return (
		<nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
			<button className="navbar-brand ps-3 invisibile" style={{textAlign:"left"}}>
				Todo
			</button>
			<button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
				<i className="fas fa-bars"></i>
			</button>
		</nav>
	);
};

export default TopNavbar;
