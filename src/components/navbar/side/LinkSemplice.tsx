import { LinkSempliceProps } from "../../../interfaces";

const LinkSemplice: React.FunctionComponent<LinkSempliceProps> = ({ children, setDaMostrare }) => {
	function premuto() {
		setDaMostrare(children);
	}
	return (
		<button className="nav-link invisibile" onClick={premuto}>
			{children}
		</button>
	);
};

export default LinkSemplice;
