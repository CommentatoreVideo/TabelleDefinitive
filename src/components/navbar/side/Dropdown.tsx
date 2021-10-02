import { useEffect, useState } from "react";
import DropdownLink from "./DropdownLink";
import DropdownTitolo from "./DropdownTitolo";

export interface DropdownProps {
	nome: string;
	voci: string[];
	premutoLink: (e: any) => any;
	classi?: string[];
	classe?: string;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ nome, voci, premutoLink, classi, classe }) => {
	const [link, setLink] = useState<any[]>([]);
	useEffect(function () {
		setLink(
			voci.map((voce, indice) => {
				const classeLink=classi!==undefined?classi[indice]:classe;
				return <DropdownLink classe={classeLink} premuto={premutoLink}>{voce}</DropdownLink>;
			})
		);
	}, voci);
	console.log(link);
	return (
		<>
			<DropdownTitolo>{nome}</DropdownTitolo>
			<div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
				<nav className="sb-sidenav-menu-nested nav">{link}</nav>
			</div>
		</>
	);
};

export default Dropdown;
