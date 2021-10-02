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
					</div>
				</div>
			</nav>
		</div>
	);
};

export default SideNav;

function estraiUserIdDaClassList(classList: DOMTokenList) {
	const classi = Array.from(classList);
	for (const classe of classi) {
		if (!classe.match(/^TodoPerUtente\d+$/)) continue;
		return Number(classe.substring(13));
	}
	return -1;
}
