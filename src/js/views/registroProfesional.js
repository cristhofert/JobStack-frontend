import React from "react";

export const RegistroProfesional = () => {
	return (
		<div className="container my-auto">
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<h1>Crear una cuenta</h1>
					<form>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className="inputRegistro form-control"
								id="email"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Contraseña</label>
							<input type="password" className="inputRegistro form-control" id="password" />
						</div>
						<div className="form-group">
							<label htmlFor="confirmPassword">Confirmar contraseña</label>
							<input type="password" className="inputRegistro form-control" id="confirmPassword" />
						</div>
						<div className="d-flex justify-content-center">
							<button type="submit" className="botonRegistro btn">
								Crear cuenta
							</button>
						</div>
					</form>
				</div>
				<div className="col-sm-12 col-md-6 div-derecha">
					<div className="mt-3 d-flex justify-content-center align-items-center">
						<h2>Otros medios de registro</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
