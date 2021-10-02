import { SeparatoreProps } from "../../../interfaces";

const Separatore: React.FunctionComponent<SeparatoreProps> = ({ children }) => {
	return <div className="sb-sidenav-menu-heading">{children}</div>;
};

export default Separatore;
