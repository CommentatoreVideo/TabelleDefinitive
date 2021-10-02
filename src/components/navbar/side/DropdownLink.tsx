export interface DropdownLinkProps {
	premuto:(e:any)=>any;
	classe?:string;
}

const DropdownLink: React.FunctionComponent<DropdownLinkProps> = ({children,premuto,classe}) => {
	return (
		<button className={`nav-link invisibile ${classe}`} onClick={premuto}>
			{children}
		</button>
	);
};

export default DropdownLink;
