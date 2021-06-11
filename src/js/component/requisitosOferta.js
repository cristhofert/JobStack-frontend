import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const RequisitosOferta = props => {
	const { store, actions } = useContext(Context);
	const [colorBoton, setColorBoton] = useState("");
	const mouseEnter = () => {
		setColorBoton("botonEliminarDatos");
	};
	const mouseLeave = () => {
		setColorBoton("");
	};
	return (
		<div className={`row my-2 text-left align-items-center`}>
			<div className="col-1">
				<i
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
					onClick={() => {
						actions.borrarDetalleOferta(props.index, props.tipo);
					}}
					className={`${props.index || props.index == 0 ? colorBoton : ""} fas fa-times fa-lg mr-2`}
				/>
			</div>
			<div className="col-11">
				<p className="m-0">{props.descripcion.nombre}</p>
			</div>
		</div>
	);
};

RequisitosOferta.propTypes = {
	descripcion: PropTypes.object,
	index: PropTypes.number,
	tipo: PropTypes.string
};
