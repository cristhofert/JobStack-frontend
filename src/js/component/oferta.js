import React from "react";
import PropTypes from "prop-types";

export const Oferta = props => {
	return (
		<div className="row m-2 p-2 rounded oferta align-items-center">
			<div className="col-sm-3 col-md-3">{props.oferta.fecha}</div>
			<div className="col-sm-9 col-md-6">{props.oferta.nombre}</div>
			<div className="col-sm-12 col-md-3 d-flex flex-column">
				<button className="boton btn mx-2">
					Postulantes <i className="fas fa-users" />
				</button>
				<button className="boton btn mt-2 mx-2">
					Editar <i className="fas fa-edit" />
				</button>
			</div>
		</div>
	);
};

Oferta.propTypes = {
	oferta: PropTypes.object
};
