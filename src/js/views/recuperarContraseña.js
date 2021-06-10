import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const RecuperarContraseña = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [enviado, setEnviado] = useState(false);
	return (
		<div className="container my-auto">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-6">
					<div className="p-5 borde rounded shadow">
						{!enviado ? (
							<form
								onSubmit={e => {
									e.preventDefault();
									actions.recuperarPass(email);
									setEnviado(true);
								}}>
								<h2>Recuperar contraseña</h2>
								<div className="form-group">
									<label htmlFor="email" className="form-label">
										Email
									</label>
									<input
										onChange={e => {
											e.target.value.trim() != "" ? setEmail(e.target.value) : setEmail("");
										}}
										type="email"
										className="form-control"
										id="email"
										value={email}
										aria-describedby="emailHelp"
									/>

									<small id="emailHelp" className="form-text text-muted">
										Le enviaremos un correo de confirmación.
									</small>
								</div>
								<div className="d-flex justify-content-center">
									<button type="submit" className="btn boton">
										Aceptar
									</button>
								</div>
							</form>
						) : (
							<h2>Le enviaremos un correo de confirmación.</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
