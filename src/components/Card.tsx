export interface CardProps {
	colore: string;
	body: string;
	footer: string;
}

const Card: React.FunctionComponent<CardProps> = ({ colore, body, footer }) => {
	return (
		<div className={`card bg-${colore} text-white mb-4`}>
			<div className="card-body">{body}</div>
			<div className="card-footer d-flex align-items-center justify-content-between">
				<a className="small text-white stretched-link" href="#">
					{footer}
				</a>
				<div className="small text-white">
					<i className="fas fa-angle-right"></i>
				</div>
			</div>
		</div>
	);
};

export default Card;
