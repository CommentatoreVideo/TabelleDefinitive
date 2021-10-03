import "./App.css";
import "./styles.css";
import "./scripts.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import TopNavbar from "./components/navbar/top/TopNavbar";
import SideNav from "./components/navbar/side/SideNav";
import Benvenuto from "./components/Panels/Benvenuto";
import Tutti from "./components/Panels/Tutti";
import Utente from "./components/Panels/Utente";
import PerUtenteTutti from "./components/Panels/PerUtenteTutti";
import TodoPerUtente from "./components/Panels/TodoPerUtente";
import { Todo, User } from "./interfaces";
import Loading from "./components/Panels/Loading";
import PerUtente from "./components/Panels/PerUtente";
import TuttiGrafici from "./components/Panels/TuttiGrafici";
import TuttiUtenti from "./components/Panels/TuttiUtenti";
import InformazioniUtente from "./components/Panels/InformazioniUtente";
const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const usersUrl = "https://jsonplaceholder.typicode.com/users";
async function getTodos(): Promise<Todo[]> {
	const response = await fetch(todosUrl);
	const todos = await response.json();
	return todos;
}
async function getUsers(): Promise<User[]> {
	const response = await fetch(usersUrl);
	const users = await response.json();
	return users;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [todos, setTodos] = useState<Todo[]>([]);
	const [showUser, setShowUser] = useState(-1);
	const [daMostrare, setDaMostrare] = useState("Loading");
	useEffect(function () {
		(async function () {
			const todos = await getTodos();
			const users = await getUsers();
			setUsers(users);
			setTodos(todos);
			setDaMostrare("Benvenuto");
		})();
	}, []);
	return (
		<>
			<Loading daMostrare={daMostrare}></Loading>
			<TopNavbar></TopNavbar>
			<div id="layoutSidenav">
				<SideNav utenti={users} setDaMostrare={setDaMostrare} />
				<div id="layoutSidenav_content">
					<main>
						<div className="container-fluid px-4">
							<Benvenuto daMostrare={daMostrare}></Benvenuto>
							<Tutti daMostrare={daMostrare} todos={todos} users={users} setShowUser={setShowUser} setDaMostrare={setDaMostrare} />
							<Utente userId={showUser} users={users} daMostrare={daMostrare} />
							<PerUtenteTutti daMostrare={daMostrare} todos={todos} users={users} />
							<TodoPerUtente setDaMostrare={setDaMostrare} daMostrare={daMostrare} todos={todos} user={users.find(user => user.id === Number(daMostrare.substring(13)))} />
							<PerUtente daMostrare={daMostrare} users={users} setDaMostrare={setDaMostrare} />
							<TuttiGrafici daMostrare={daMostrare} users={users} todos={todos}></TuttiGrafici>
							<TuttiUtenti daMostrare={daMostrare} users={users} setDaMostrare={setDaMostrare}></TuttiUtenti>
							<InformazioniUtente daMostrare={daMostrare} users={users} setDaMostrare={setDaMostrare}></InformazioniUtente>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
