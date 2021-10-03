import { InformazioniUtenteProps } from "../../interfaces";
import Card from "../Card";

function creaTabella(data: any) {
	function premutoTh(e: any) {
		const celle = e.target.parentNode.children;
		for (const cella of celle) {
			if (cella.attributes["aria-tipo"].value === "giusto") cella.hidden = !cella.hidden;
		}
	}
	const tbody = [];
	for (const chiave in data) {
		tbody.push(
			<tr>
				<th aria-tipo="sbagliato" onClick={premutoTh} style={{ cursor: "pointer" }}>
					{chiave}
				</th>
				<td aria-tipo="giusto" hidden={false}>
					{typeof data[chiave] !== "object" ? data[chiave] : creaTabella(data[chiave])}
				</td>
				<td aria-tipo="giusto" hidden={true}>
					...
				</td>
			</tr>
		);
	}
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Proprietà</th>
					<th>Valore</th>
				</tr>
			</thead>
			<tbody>{tbody}</tbody>
		</table>
	);
}

const InformazioniUtente: React.FunctionComponent<InformazioniUtenteProps> = ({ daMostrare, users, setDaMostrare }) => {
	if (!daMostrare.match(/^InformazioniUtente\d+$/)) return null;
	const user = users.find(user => user.id === Number(daMostrare.substring(18)));
	if (user === undefined) return null;
	function premutoCard() {
		setDaMostrare(`TodoPerUtente${user?.id}`);
	}
	return (
		<div>
			{creaTabella(user)}
			<Card body="Todos dell'utente" colore="primary" footer="Premi per visualizzare i todos" premuto={premutoCard}></Card>
		</div>
	);
};

export default InformazioniUtente;
