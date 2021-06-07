import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const InfoProfesional = props => {
	const { store, actions } = useContext(Context);
	const [colorBoton, setColorBoton] = useState("");
	const mouseEnter = () => {
		setColorBoton("botonEliminarDatos");
	};
	const mouseLeave = () => {
		setColorBoton("");
	};
	return (
		<div className={`my-2 justify-content-${props.profesional ? "center" : "start"} align-items-center d-flex`}>
			{props.editar ? (
				<i
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
					onClick={() => {
						actions.borrarDetalle(props.index, props.tipo);
					}}
					className={`${props.index || props.index == 0 ? colorBoton : ""} fas fa-times fa-lg mr-2`}
				/>
			) : (
				""
			)}
			<p className="m-0">{props.descripcion.nombre}</p>
		</div>
	);
};

InfoProfesional.propTypes = {
	editar: PropTypes.bool,
	descripcion: PropTypes.object,
	index: PropTypes.number,
	tipo: PropTypes.string,
	profesional: PropTypes.bool
};
