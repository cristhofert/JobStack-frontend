import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Ofertas = props => {
	return (
		<div className="row m-2 p-2 rounded border">
			<div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
				<h2>{props.oferta.fecha}</h2>
			</div>
			<div className="col-sm-12 col-md-7">
				<h2>{props.oferta.nombre}</h2>
				<p>{props.oferta.descripcion}</p>
			</div>
			<div className="col-sm-12 col-md-1 d-flex justify-content-center align-items-center">
				<Link className="boton btn mx-2" to={`/oferta/${props.oferta.id}`}>
					Ver <i className="fas fa-plus" />
				</Link>
			</div>
		</div>
	);
};

Ofertas.propTypes = {
	oferta: PropTypes.object
};
