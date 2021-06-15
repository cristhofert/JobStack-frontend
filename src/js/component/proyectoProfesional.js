import React from "react";
import PropTypes from "prop-types";

export const ProyectoProfesional = props => {
	return (
		<div className="row m-2 p-2 rounded border">
			<div className="col-sm-12 col-md-11">
				<h2
					onClick={() =>
						props.proyecto.html_url.length != 0 ? window.open(props.proyecto.html_url, "_blank") : ""
					}>
					{props.proyecto.name}
				</h2>
				<p>{props.proyecto.description}</p>
			</div>
			<div className="col-sm-12 col-md-1 d-flex justify-content-center align-items-center">
				<i className="mx-2 fab fa-2x fa-github" />
			</div>
		</div>
	);
};

ProyectoProfesional.propTypes = {
	proyecto: PropTypes.object
};
