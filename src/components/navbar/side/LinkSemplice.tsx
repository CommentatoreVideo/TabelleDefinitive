export interface LinkSempliceProps {
  setDaMostrare:(daMostrare:string)=>any;
  children:string;
}

const LinkSemplice: React.FunctionComponent<LinkSempliceProps> = ({children,setDaMostrare}) => {
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
