import Grafico from "../../Grafico";
import { Todo, TuttiGraficiProps, User } from "../../interfaces";
function creaGrafici(users: User[], todos: Todo[]) {
	const grafici: Array<[JSX.Element, User]> = [];
	let indice = 0;
	for (const user of users) {
		const todosFiltrati = todos.filter(todo => todo.userId === user.id);
		let fatti = todosFiltrati.reduce((tot, todo) => tot + (todo.completed ? 1 : 0), 0);
		const daFare = (todosFiltrati.length - fatti) / todosFiltrati.length;
		fatti /= todosFiltrati.length;
		grafici.push([<Grafico key={indice++} percentuali={[daFare * 100, fatti * 100]}></Grafico>, user]);
	}
	return grafici;
}
const TuttiGrafici: React.FunctionComponent<TuttiGraficiProps> = ({ daMostrare, todos, users }) => {
	const grafici = creaGrafici(users, todos);
	const righe = [];
	let colonne = [];
	let indiceColonne = 0;
	let indiceRighe = 0;
	for (const [grafico, user] of grafici) {
		if (colonne.length === 3) {
			righe.push(
				<div key={indiceRighe++} className="row">
					{colonne}
				</div>
			);
			colonne = [];
		}
		colonne.push(
			<div key={indiceColonne++} className="col-4">
				<h3>{user.username}</h3>
				{grafico}
			</div>
		);
	}
	if (colonne.length !== 3) righe.push(<div key={indiceRighe++} className="row">{colonne}</div>);
	if (daMostrare !== "Tutti grafici") return null;
	return <div>{righe}</div>;
};

export default TuttiGrafici;
