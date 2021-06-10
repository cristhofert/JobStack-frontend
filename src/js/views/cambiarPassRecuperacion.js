import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CambiarPassRecuperacion = () => {
	const { store, actions } = useContext(Context);
	const [error, setError] = useState(false);
	const [reqError, setReqError] = useState(false);
	const [nuevaPass, setNuevaPass] = useState("");
	const [nuevaPassConfirmacion, setNuevaPassConfirmacion] = useState("");
	const [enviado, setEnviado] = useState(false);
	const { token } = useParams();
	const cambiarPass = async () => {
		if (nuevaPass == nuevaPassConfirmacion) {
			const ok = await actions.cambiarPassRecuperacion(token, nuevaPass);
			ok ? setReqError(false) : setReqError(true);
			setEnviado(true);
		} else {
			setError(true);
		}
	};
	return (
		<div className="container my-auto">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-6">
					<div className="p-5 borde rounded shadow">
						{!enviado ? (
							<form
								onSubmit={e => {
									e.preventDefault();
									cambiarPass();
								}}>
								<h2>Cambiar contraseña</h2>
								{error ? (
									<div className="alert alert-danger" role="alert">
										Las constraseñas deben coincidir!
									</div>
								) : (
									""
								)}
								<div className="form-group">
									<label htmlFor="contraseña" className="form-label">
										Contraseña nueva
									</label>
									<input
										onChange={e => {
											e.target.value.trim() != ""
												? setNuevaPass(e.target.value)
												: setNuevaPass("");
										}}
										type="password"
										className="form-control"
										id="contraseña"
										value={nuevaPass}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="confirmacionContraseña" className="form-label">
										Repetir contraseña nueva
									</label>
									<input
										onChange={e => {
											e.target.value.trim() != ""
												? setNuevaPassConfirmacion(e.target.value)
												: setNuevaPassConfirmacion("");
										}}
										type="password"
										className="form-control"
										id="confirmacionContraseña"
										value={nuevaPassConfirmacion}
										aria-describedby="confirmacionContraseñaHelp"
									/>
								</div>
								<div className="d-flex justify-content-center">
									<button type="submit" className="btn boton">
										Aceptar
									</button>
								</div>
							</form>
						) : reqError ? (
							<h2>Hubo un error procesando la solicitud</h2>
						) : (
							<h2>Su contraseña fue modificada con exito.</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
