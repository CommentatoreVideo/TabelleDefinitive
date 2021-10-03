import Card from "../Card";
import { User } from "../../interfaces";
export interface TuttiUtentiProps {
  daMostrare:string;
  setDaMostrare:(daMostrare:string)=>any;
  users:User[];
}
 
const TuttiUtenti: React.FunctionComponent<TuttiUtentiProps> = ({daMostrare,setDaMostrare,users}) => {
  function premutaCard(e: any) {
		for (const classe of e.target.classList as Array<string>) {
			if (!classe.match(/^cardUserId\d+$/)) continue;
			const id = classe.substring(10);
			setDaMostrare(`InformazioniUtente${id}`);
		}
	}
	if (daMostrare !== "Tutti gli utenti") return null;
	const carte = users.map(user => {
		return <Card colore="primary" classe={`cardUserId${user.id}`} body={user.username} footer="Visualizza informazioni" premuto={premutaCard}></Card>;
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
  if(colonne.length!==0) righe.push(<div className="row">{colonne}</div>)
	return <div className="mt-4">{righe}</div>;
}
 
export default TuttiUtenti;