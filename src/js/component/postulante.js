import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Postulante = props => {
	return (
		<div className="row m-2 p-2 rounded oferta align-items-center">
			<div className="col-sm-9 col-md-10">
				<h2 className="m-0">{props.postulante.nombre}</h2>
				<h2 className="m-0">{props.postulante.apellido}</h2>
			</div>
			<div className="col-sm-3 col-md-2">
				<Link className="boton btn m-2" to={`/profesional/${props.postulante.id}`}>
					Visitar Perfil
				</Link>
			</div>
		</div>
	);
};

Postulante.propTypes = {
	postulante: PropTypes.object
};
