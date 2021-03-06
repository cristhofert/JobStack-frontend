import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const AgregarDetallesProf = props => {
	const { store, actions } = useContext(Context);
	const [placeholder, setPlaceholder] = useState("");
	return (
		<div className="mx-3">
			<form
				onSubmit={e => {
					e.preventDefault();
					if (placeholder != "") {
						const detalle = { nombre: placeholder };
						actions.setProfesional({ [props.tipo]: [...store.profesional[props.tipo], detalle] });
					}
					setPlaceholder("");
				}}
				className="form">
				<div className="row">
					<div className="col-sm-12 col-md-9 px-1">
						<input
							type="text"
							className="form-control"
							onChange={e => setPlaceholder(e.target.value)}
							value={placeholder}
							placeholder={`Agregar ${props.tipo}`}
						/>
					</div>
					<div className="col-sm-12 col-md-3 px-1">
						<button type="submit" className="boton btn">
							Agregar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

AgregarDetallesProf.propTypes = {
	tipo: PropTypes.string
};
