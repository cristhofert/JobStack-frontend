import React from "react";

export const RegistroProfesional = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<h1>Crear una cuenta</h1>
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="Password">Contraseña</label>
							<input type="password" className="form-control" id="Password" />
						</div>
						<div className="form-group">
							<label htmlFor="ConfirmPassword">Contraseña</label>
							<input type="password" className="form-control" id="ConfirmPassword" />
						</div>
						<div className="d-flex justify-content-center">
							<button type="submit" className="btn btn-primary">
								Crear cuenta
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
