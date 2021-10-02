import { PerUtenteProps, User } from "../../interfaces";
import Card from "../Card";

const PerUtente: React.FunctionComponent<PerUtenteProps> = ({ daMostrare, users, setDaMostrare }) => {
	function premutaCard(e: any) {
		for (const classe of e.target.classList as Array<string>) {
			if (!classe.match(/^cardUserId\d+$/)) continue;
			const id = classe.substring(10);
			setDaMostrare(`TodoPerUtente${id}`);
		}
	}
	if (daMostrare !== "Per utente") return null;
	const carte = users.map(user => {
		return <Card colore="primary" classe={`cardUserId${user.id}`} body={user.username} footer="Visualizza todo" premuto={premutaCard}></Card>;
	});
	const righe = [];
	let colonne: any[] = [];
	for (const carta of carte) {
		if (colonne.length === 3) {
			righe.push(<div className="row">{colonne}</div>);
			colonne = [];
		}
		colonne.push(<div className="col-4">{carta}</div>);
	}
	return <div className="mt-4">{righe}</div>;
};

export default PerUtente;
