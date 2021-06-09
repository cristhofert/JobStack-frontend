import React from "react";

export const RecuperarContraseña = () => {
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-6 shadow" id="borde">
					<h1 className="ml-3 mt-2">Recuperar contraseña</h1>
					<form>
						<div className="mb-3 mt-4" id="ingresarEmail">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
							<div id="email1" className="form-text">
								Le enviaremos un correo de confirmación
							</div>
						</div>
						<div>
							<button type="submit" className="btn btn-primary" id="btnAceptar">
								Aceptar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
