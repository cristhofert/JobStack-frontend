import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Oferta = props => {
	return (
		<div className="row m-2 p-2 rounded oferta align-items-center">
			<div className="col-sm-3 col-md-3">
				<h2>{props.oferta.fecha}</h2>
			</div>
			<div className="col-sm-9 col-md-6">
				<h2>{props.oferta.nombre}</h2>
			</div>
			<div className="col-sm-12 col-md-3 d-flex flex-column">
				<Link className="boton btn mx-2" to={props.oferta.id ? `/postulantes/${props.oferta.id}` : "error"}>
					Postulantes <i className="fas fa-users" />
				</Link>
				<Link
					className="boton btn mt-2 mx-2"
					to={`/oferta/${props.oferta.id ? props.oferta.id + "/editar" : "error"}`}>
					Editar <i className="fas fa-edit" />
				</Link>
			</div>
		</div>
	);
};

Oferta.propTypes = {
	oferta: PropTypes.object
};
