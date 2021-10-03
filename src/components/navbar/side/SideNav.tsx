import { SideNavProps } from "../../../interfaces";
import LinkSemplice from "./LinkSemplice";
import Separatore from "./Separatore";

const SideNav: React.FunctionComponent<SideNavProps> = ({ utenti, setDaMostrare }) => {
	return (
		<div id="layoutSidenav_nav">
			<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
				<div className="sb-sidenav-menu">
					<div className="nav">
						<Separatore>Todos</Separatore>
						<LinkSemplice setDaMostrare={setDaMostrare}>Tutti</LinkSemplice>
						<LinkSemplice setDaMostrare={setDaMostrare}>Per utente</LinkSemplice>
						<LinkSemplice setDaMostrare={setDaMostrare}>Tutti per utente</LinkSemplice>
						<Separatore>Grafici</Separatore>
						<LinkSemplice setDaMostrare={setDaMostrare}>Tutti grafici</LinkSemplice>
						<Separatore>Utenti</Separatore>
						<LinkSemplice setDaMostrare={setDaMostrare}>Tutti gli utenti</LinkSemplice>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default SideNav;

