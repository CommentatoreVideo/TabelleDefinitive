import Card from "../Card";
import { TuttiUtentiProps } from "../../interfaces";
import { creaRighe } from "../../colonne";

const TuttiUtenti: React.FunctionComponent<TuttiUtentiProps> = ({ daMostrare, setDaMostrare, users }) => {
	function premutaCard(e: any) {
		for (const classe of e.target.classList as Array<string>) {
			if (!classe.match(/^cardUserId\d+$/)) continue;
			setDaMostrare(`InformazioniUtente${classe.substring(10)}`);
		}
	}
	if (daMostrare !== "Tutti gli utenti") return null;
	const carte = users.map(user => <Card colore="primary" classe={`cardUserId${user.id}`} body={user.username} footer="Visualizza informazioni" premuto={premutaCard}></Card>);
	return <div className="mt-4">{creaRighe(carte)}</div>;
};

export default TuttiUtenti;
