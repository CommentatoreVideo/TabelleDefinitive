import { Todo, User } from "../../App";

export interface PerUtenteTuttiProps {
	daMostrare: string;
	todos: Todo[];
	users: User[];
}

function getThead() {
	const thead = [];
  thead.push(<th>Id</th>)
  thead.push(<th>Titolo</th>)
  thead.push(<th>Fatto</th>)
	return thead;
}

function getTbody(todos: Todo[]) {
	const tbody = [];
	for (const todo of todos) {
		const celle = [];
    celle.push(<td>{todo.id}</td>)
    celle.push(<td>{todo.title}</td>)
    celle.push(<td>{todo.completed ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-times-circle text-danger"></i>}</td>);
		tbody.push(<tr>{celle}</tr>);
	}
	return tbody;
}

function getTabella(todos: Todo[]) {
	return (
		<table className="table">
			<thead>{getThead()}</thead>
			<tbody>{getTbody(todos)}</tbody>
		</table>
	);
}

function getTabelle(dati: { user: User; todos: Todo[] }[]) {
	return dati.map(({todos})=>getTabella(todos));
}
const PerUtenteTutti: React.FunctionComponent<PerUtenteTuttiProps> = ({ daMostrare, todos, users }) => {
	if (daMostrare !== "Tutti per utente") return null;
	const dati: { user: User; todos: Todo[] }[] = [];
	for (const user of users) {
		const todosFiltrati = todos.filter(todo => todo.userId === user.id) || [];
		dati.push({ user, todos: todosFiltrati });
	}
	const tabelle = getTabelle(dati);
	const righe = [];
	let colonne: any[] = [];
	for (const tabella of tabelle) {
		if (colonne.length === 3) {
			righe.push(<div className="row">{colonne}</div>);
			colonne = [];
		}
		colonne.push(<div className="col-4">{tabella}</div>);
	}
	return <div>{righe}</div>;
};

export default PerUtenteTutti;