import { User } from "../../../App";
import Dropdown from "./Dropdown";
import LinkSemplice from "./LinkSemplice";
import Separatore from "./Separatore";

export interface SideNavProps {
	utenti: User[];
	setDaMostrare: (daMostrare: string) => any;
}

const SideNav: React.FunctionComponent<SideNavProps> = ({ utenti, setDaMostrare }) => {
	function estraiUserIdDaClassList(classList:DOMTokenList) {
		const classi=Array.from(classList);
		for(const classe of classi) {
			if(!classe.match(/^TodoPerUtente\d+$/)) continue;
			return Number(classe.substring(13));
		}
		return -1;
	}
	function premutoLinkTodoPerUtente(e: any) {
		const id=estraiUserIdDaClassList(e.target.classList as DOMTokenList)
		setDaMostrare(`TodoPerUtente${id}`);
	}
	const classiPerUtente = utenti.map(user => `TodoPerUtente${user.id}`);
	return (
		<div id="layoutSidenav_nav">
			<nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
				<div className="sb-sidenav-menu">
					<div className="nav">
						<Separatore>Todos</Separatore>
						<LinkSemplice setDaMostrare={setDaMostrare}>Tutti</LinkSemplice>
						<Dropdown nome="Per utente" classi={classiPerUtente} voci={utenti.map(utente => utente.username)} premutoLink={premutoLinkTodoPerUtente}></Dropdown>
						<LinkSemplice setDaMostrare={setDaMostrare}>Tutti per utente</LinkSemplice>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default SideNav;
