import { useEffect, useState } from "react";
import DropdownLink from "./DropdownLink";
import DropdownTitolo from "./DropdownTitolo";
import { DropdownProps } from "./../../../interfaces";

const Dropdown: React.FunctionComponent<DropdownProps> = ({ nome, voci, premutoLink, classi, classe }) => {
	const [link, setLink] = useState<any[]>([]);
	useEffect(
		function () {
			setLink(
				voci.map((voce, indice) => {
					return (
						<DropdownLink classe={classi !== undefined ? classi[indice] : classe} premuto={premutoLink}>
							{voce}
						</DropdownLink>
					);
				})
			);
		},
		[voci]
	);
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
