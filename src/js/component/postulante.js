import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Postulante = props => {
	return (
		<div className="row m-2 p-2 rounded oferta align-items-center">
			<div className="col-sm-9 col-md-6">{props.postulante.nombre}</div>
			<Link className="boton btn mt-2 mx-2" to={"/"}>
				Visitar Perfil <i className="fas fa-edit" />
			</Link>
		</div>
	);
};

Postulante.propTypes = {
	postulante: PropTypes.object
};
