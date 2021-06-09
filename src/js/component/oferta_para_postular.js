import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const OfertaParaPostular = props => {
	return (
		<div className="row m-2 p-2 rounded oferta align-items-center">
			<div className="col-sm-3 col-md-3">{props.oferta.fecha}</div>
			<div className="col-sm-9 col-md-6">{props.oferta.nombre}</div>
			<div className="col-sm-12 col-md-3 d-flex flex-column">
				<Link className="boton btn mx-2" to={`/oferta/${props.oferta.id}`}>
					Ver <i className="fas fa-plus" />
				</Link>
			</div>
		</div>
	);
};

OfertaParaPostular.propTypes = {
	oferta: PropTypes.object
};
