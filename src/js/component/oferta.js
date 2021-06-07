import React from "react";
import PropTypes from "prop-types";

export const Oferta = props => {
	return (
		<div className="row m-2 p-2 rounded border">
			<div className="col-3">{props.oferta.fecha}</div>
			<div className="col-6">{props.oferta.nombre}</div>
			<div className="col-3">
				<button className="boton btn">Postulantes</button>
				<button className="boton btn">Editar</button>
			</div>
		</div>
	);
};

Oferta.propTypes = {
	oferta: PropTypes.object
};
