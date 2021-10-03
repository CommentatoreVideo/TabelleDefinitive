import { creaRighe } from "../../colonne";
import { PerUtenteProps } from "../../interfaces";
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
	const carte = users.map((user, indice) => {
		return <Card key={indice} colore="primary" classe={`cardUserId${user.id}`} body={user.username} footer="Visualizza todo" premuto={premutaCard}></Card>;
	});
	return <div className="mt-4">{creaRighe(carte)}</div>;
};

export default PerUtente;
