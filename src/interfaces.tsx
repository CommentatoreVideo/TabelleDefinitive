export interface DropdownProps {
	nome: string;
	voci: string[];
	premutoLink: (e: any) => any;
	classi?: string[];
	classe?: string;
}

export interface DropdownLinkProps {
	premuto: (e: any) => any;
	classe?: string;
}
export interface DropdownTitoloProps {}
export interface LinkSempliceProps {
	setDaMostrare: (daMostrare: string) => any;
	children: string;
}
export interface SeparatoreProps {}
export interface SideNavProps {
	utenti: User[];
	setDaMostrare: (daMostrare: string) => any;
}
export interface BenvenutoProps {
	daMostrare: string;
}

export interface TodoPerUtenteProps {
	daMostrare: string;
	todos: Todo[];
	user: User | undefined;
	setDaMostrare: (daMostrare: string) => any;
}

export interface PerUtenteTuttiProps {
	daMostrare: string;
	todos: Todo[];
	users: User[];
}

export interface TuttiProps {
	daMostrare: string;
	todos: Todo[];
	users: User[];
	setDaMostrare: (daMostrare: string) => any;
}
export interface UtenteProps {
	daMostrare: string;
	userId: number;
	users: User[];
}

export interface CardProps {
	colore: string;
	body: string;
	footer: string;
	classe?: string;
	premuto?: (e: any) => any;
}
export type Geo = {
	lat: string;
	lng: string;
};
export type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
	[index: string]: number | string | Address | Company | Geo;
};
export type Company = {
	name: string;
	catchPhrase: string;
	bs: string;
	[index: string]: number | string | Address | Company;
};
export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
	[index: string]: number | string | Address | Company;
}

export interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
	[index: string]: number | string | boolean;
}
export interface LoadingProps {
	daMostrare: string;
}

export interface PerUtenteProps {
	daMostrare: string;
	users: User[];
	setDaMostrare: (daMostrare: string) => any;
}

export interface InformazioniUtenteProps {
	daMostrare: string;
	users: User[];
	setDaMostrare: (daMostrare: string) => any;
}

export interface TuttiGraficiProps {
	daMostrare: string;
	todos: Todo[];
	users: User[];
}
export interface TuttiUtentiProps {
	daMostrare: string;
	setDaMostrare: (daMostrare: string) => any;
	users: User[];
}
