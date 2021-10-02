import { useEffect, useState } from "react";
import { User } from "../../App";

export interface UtenteProps {
	daMostrare: string;
	userId: number;
	users: User[];
}
function creaRigaCoppia(proprietà:string,valore:string|number) {
  return <tr>
  <th>{proprietà}</th>
  <td>{valore}</td>
</tr>
}

const Utente: React.FunctionComponent<UtenteProps> = ({ daMostrare, userId, users }) => {
	const [righe, setRighe] = useState<any[]>([]);
	useEffect(
		function () {
			const user = users.find(user => user.id === userId);
			console.log(user);
			if (user === undefined) return;
			const righe = [];
      righe.push(creaRigaCoppia("Id",user.id));
      righe.push(creaRigaCoppia("Nome",user.name));
      righe.push(creaRigaCoppia("Username",user.username));
      righe.push(creaRigaCoppia("Email",user.email));
      righe.push(creaRigaCoppia("Telefono",user.phone));
      righe.push(creaRigaCoppia("Sito internet",user.website));
			setRighe(righe);
		},
		[userId, users]
	);
	if (daMostrare !== "Utente") return null;
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Proprietà</th>
						<th>Valore</th>
					</tr>
				</thead>
				<tbody>{righe}</tbody>
			</table>
		</div>
	);
};

export default Utente;
