import { useEffect, useState } from "react";
import { TodoPerUtenteProps, Todo } from "../../interfaces";
import Card from "../Card";

const TodoPerUtente: React.FunctionComponent<TodoPerUtenteProps> = ({ daMostrare, todos, user, setDaMostrare }) => {
	const [righe, setRighe] = useState<any[]>([]);
	function premutoCard() {
		setDaMostrare(`InformazioniUtente${user?.id}`);
	}
	useEffect(() => {
		if (user === undefined) return;
		setRighe(todos.filter(todo => todo.userId === user.id).map(creaRiga));
	}, [todos, daMostrare, user]);
	if (!daMostrare.match(/^TodoPerUtente\d+$/)) return null;
	return (
		<div className="mt-4">
			<Card body={user?.username || ""} footer="Premi per visualizzare le informazioni sull'utente" colore="primary" premuto={premutoCard} />
			<table className="table">
				<thead>{getThead()}</thead>
				<tbody>{righe}</tbody>
			</table>
		</div>
	);
};

export default TodoPerUtente;

function creaRiga({id,title,completed}: Todo, indice: number) {
	const classeTick = "far fa-check-circle text-success";
	const classeCross = "far fa-times-circle text-danger";
	return (
		<tr key={indice}>
			<td>{id}</td>
			<td>{title}</td>
			<td>
				<i className={completed ? classeTick : classeCross} />
			</td>
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
