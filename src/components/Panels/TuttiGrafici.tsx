import { Pie } from "react-chartjs-2";
import Grafico from "../../Grafico";
import { Todo, User } from "../../interfaces";
export interface TuttiGraficiProps {
	daMostrare: string;
	todos: Todo[];
	users: User[];
}

const TuttiGrafici: React.FunctionComponent<TuttiGraficiProps> = ({ daMostrare, todos, users }) => {
	const grafici:Array<[JSX.Element,User]> = [];
	for (const user of users) {
		const todosFiltrati = todos.filter(todo => todo.userId === user.id);
		let fatti = todosFiltrati.reduce((tot, todo) => tot + (todo.completed ? 1 : 0), 0);
		const daFare = (todosFiltrati.length - fatti) / todosFiltrati.length;
		fatti /= todosFiltrati.length;
		grafici.push([<Grafico percentuali={[daFare * 100, fatti * 100]}></Grafico>,user]);
	}
	const righe = [];
	let colonne = [];
	for (const [grafico,user] of grafici) {
		if (colonne.length === 3) {
			righe.push(<div className="row">{colonne}</div>);
			colonne = [];
		}
		colonne.push(<div className="col-4"><h3>{user.username}</h3>{grafico}</div>);
	}
	if (colonne.length !== 3) righe.push(<div className="row">{colonne}</div>);
	if (daMostrare !== "Tutti grafici") return null;
	return <div>
    {righe}
  </div>;
};

export default TuttiGrafici;
