import "./App.css";
import "./styles.css";
import "./scripts.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import TopNavbar from "./components/navbar/top/TopNavbar";
import Card from "./components/Card";
import SideNav from "./components/navbar/side/SideNav";
import Benvenuto from "./components/Panels/Benvenuto";
import Tutti from "./components/Panels/Tutti";
import Utente from "./components/Panels/Utente";
import PerUtenteTutti from "./components/Panels/PerUtenteTutti";
import PerUtente from "./components/Panels/PerUtente";
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
export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
	[index:string]:number|string|boolean;
}

function App() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState<User[]>([]);
	const [todos, setTodos] = useState<Todo[]>([]);
	const [showUser, setShowUser] = useState(-1);
	const [daMostrare, setDaMostrare] = useState("Benvenuto");
	useEffect(function () {
		(async function () {
			const todos = await getTodos();
			const users = await getUsers();
			setUsers(users);
			setTodos(todos);
			setLoading(false);
		})();
	}, []);

	if (loading)
		return (
			<div className="container-fluid">
				<h1>Caricamento</h1>
			</div>
		);
	return (
		<>
			<TopNavbar></TopNavbar>
			<div id="layoutSidenav">
				<SideNav utenti={users} setDaMostrare={setDaMostrare} />
				<div id="layoutSidenav_content">
					<main>
						<div className="container-fluid px-4">
							<Benvenuto daMostrare={daMostrare}></Benvenuto>
							<Tutti daMostrare={daMostrare} todos={todos} users={users} setShowUser={setShowUser} setDaMostrare={setDaMostrare} />
							<Utente userId={showUser} users={users} daMostrare={daMostrare}/>
							<PerUtenteTutti daMostrare={daMostrare} todos={todos} users={users}/>
							<PerUtente daMostrare={daMostrare} todos={todos} user={users.find(user=>user.id===Number(daMostrare.substring(13)))} setShowUser={setShowUser} setDaMostrare={setDaMostrare} />
							<h1 className="mt-4">Dashboard</h1>
							<ol className="breadcrumb mb-4">
								<li className="breadcrumb-item active">Dashboard</li>
							</ol>
							<div className="row">
								<div className="col-xl-3 col-md-6">
									<Card colore="primary" body="Primary Card" footer="View Details"></Card>
								</div>
								<div className="col-xl-3 col-md-6">
									<Card colore="warning" body="Warning Card" footer="View Details"></Card>
								</div>
								<div className="col-xl-3 col-md-6">
									<Card colore="success" body="Success Card" footer="View Details"></Card>
								</div>
								<div className="col-xl-3 col-md-6">
									<Card colore="danger" body="Danger Card" footer="View Details"></Card>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-6">
									<div className="card mb-4">
										<div className="card-header">
											<i className="fas fa-chart-area me-1"></i>
											Area Chart Example
										</div>
										<div className="card-body">
											<canvas id="myAreaChart" width="100%" height="40"></canvas>
										</div>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="card mb-4">
										<div className="card-header">
											<i className="fas fa-chart-bar me-1"></i>
											Bar Chart Example
										</div>
										<div className="card-body">
											<canvas id="myBarChart" width="100%" height="40"></canvas>
										</div>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
