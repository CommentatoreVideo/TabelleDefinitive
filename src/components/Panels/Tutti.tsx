import { useEffect, useState } from "react";
import { Todo, User } from "../../App";

export interface TuttiProps {
	daMostrare: string;
	todos: Todo[];
	users: User[];
	setShowUser: (showUser: number) => any;
  setDaMostrare:(daMostrare:string)=>any;
}

const Tutti: React.FunctionComponent<TuttiProps> = ({ daMostrare, todos, users, setShowUser,setDaMostrare }) => {
	function premutoUsername(e: any) {
		const classi:string[] = Array.from(e.target.classList as DOMTokenList);
		for (const classe of classi) {
			if (!classe.match(/^userId\d+$/)) continue;
			setShowUser(Number(classe.substring(6)));
      setDaMostrare("Utente");
		}
	}
	const [righe, setRighe] = useState<any[]>([]);
	useEffect(
		function () {
			setRighe(
				todos.map(todo => {
					const user = users.find(user => user.id === todo.userId);
					return (
						<tr>
							<td className={`fakeLink userId${todo.userId}`} onClick={premutoUsername}>
								{user?.username}
							</td>
							<td>{todo.id}</td>
							<td>{todo.title}</td>
							<td>{todo.completed?<i className="far fa-check-circle text-success"></i>:<i className="far fa-times-circle text-danger"></i>}</td>
						</tr>
					);
				})
			);
		},
		[todos]
	);
	if (daMostrare !== "Tutti") return null;
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Utente</th>
					<th>id</th>
					<th>Titolo</th>
					<th>Fatto</th>
				</tr>
			</thead>
			<tbody>{righe}</tbody>
		</table>
	);
};

export default Tutti;
