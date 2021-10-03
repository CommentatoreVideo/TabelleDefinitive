const NUMERO_COLONNE = 3;
export function creaRighe<T>(vettore: T[]) {
	const righe = [];
	let colonne: any[] = [];
	let indiceRiga = 0;
	let indiceColonna = 0;
	for (const elemento of vettore) {
		if (colonne.length === NUMERO_COLONNE) {
			righe.push(
				<div key={indiceRiga++} className="row">
					{colonne}
				</div>
			);
			colonne = [];
		}
		colonne.push(
			<div key={indiceColonna++} className="col-4">
				{elemento}
			</div>
		);
	}
	if (colonne.length !== 0)
		righe.push(
			<div key={indiceRiga++} className="row">
				{colonne}
			</div>
		);
	return righe;
}
