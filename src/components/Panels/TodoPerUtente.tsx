import { useEffect, useState } from "react";
import { TodoPerUtenteProps, Todo } from "../../interfaces";
import Card from "../Card";

const TodoPerUtente: React.FunctionComponent<TodoPerUtenteProps> = ({ daMostrare, todos, user,setDaMostrare }) => {
	const [righe, setRighe] = useState<any[]>([]);
	function premutoCard() {
		setDaMostrare(`InformazioniUtente${user?.id}`);
	}
	useEffect(
		function () {
			if (user === undefined) return;
			setRighe(todos.filter(todo => todo.userId === user.id).map(todo => creaRiga(todo)));
		},
		[todos, daMostrare, user]
	);
	if (!daMostrare.match(/^TodoPerUtente\d+$/)) return null;
	return (
		<div className="mt-4">
			<Card body={user?.username || ""} footer="Premi per visualizzare le informazioni sull'utente" colore="primary" premuto={premutoCard}></Card>
			<table className="table">
				<thead>{getThead()}</thead>
				<tbody>{righe}</tbody>
			</table>
		</div>
	);
};

export default TodoPerUtente;

function creaRiga(todo: Todo) {
	return (
		<tr>
			<td>{todo.id}</td>
			<td>{todo.title}</td>
			<td>{todo.completed ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-times-circle text-danger"></i>}</td>
		</tr>
	);
}

function getThead() {
	return (
		<tr>
			<th>id</th>
			<th>Titolo</th>
			<th>Fatto</th>
		</tr>
	);
}
