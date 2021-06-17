import React from "react";

export const Calificar = () => {
	return (
		<div className="container">
			<h2 className="mt-3 text-center">¿Qué te ha parecido? Déjanos tu calificación</h2>
			<div className="ec-stars-wrapper">
				<a href="#" data-value="1" title="Votar con 1 estrellas">
					&#9733;
				</a>
				<a href="#" data-value="2" title="Votar con 2 estrellas">
					&#9733;
				</a>
				<a href="#" data-value="3" title="Votar con 3 estrellas">
					&#9733;
				</a>
				<a href="#" data-value="4" title="Votar con 4 estrellas">
					&#9733;
				</a>
				<a href="#" data-value="5" title="Votar con 5 estrellas">
					&#9733;
				</a>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					Añadir comentario
				</label>
				<textarea className="form-control" id="exampleTextarea1" rows="3" />
			</div>
			<button type="button" className="btn btn-primary btn-lg">
				Enviar
			</button>
		</div>
	);
};
