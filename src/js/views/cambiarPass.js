import React from "react";

export const CambiarPass = () => {
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-6 shadow" id="borde">
					<h1 className="ml-3 mt-2">Recuperar contraseña</h1>
					<form>
						<div className="mb-3 mt-4" id="ingresarEmail">
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Contraseña nueva
								</label>
								<input type="password" className="form-control" id="exampleInputPassword1" />
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Confirmar contraseña
								</label>
								<input type="password" className="form-control" id="exampleInputPassword1" />
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
