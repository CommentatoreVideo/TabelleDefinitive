import { CardProps } from "../interfaces";

const Card: React.FunctionComponent<CardProps> = ({ colore, body, footer,classe,premuto }) => {
	return (
		<div className={`card bg-${colore} text-white mb-4`}>
			<div className="card-body">{body}</div>
			<div className="card-footer d-flex align-items-center justify-content-between">
				<button className={`small text-white stretched-link ${classe} invisibile`} onClick={premuto}>
					{footer}
				</button>
				<div className="small text-white">
					<i className="fas fa-angle-right"></i>
				</div>
			</div>
		</div>
	);
};

export default Card;
