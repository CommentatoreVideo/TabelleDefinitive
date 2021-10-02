import { DropdownTitoloProps } from "../../../interfaces";

const DropdownTitolo: React.FunctionComponent<DropdownTitoloProps> = ({ children }) => {
	return (
		<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
			{children}
			<div className="sb-sidenav-collapse-arrow">
				<i className="fas fa-angle-down"></i>
			</div>
		</a>
	);
};

export default DropdownTitolo;
