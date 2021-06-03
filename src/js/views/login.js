import React from "react";
import "../../styles/home.scss";

export const Login = () => {
	return (
		<div className="container my-auto">
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<h1 id="title">Ingresar</h1>
					<form id="form">
						<div className="mb-3">
							<label htmlFor="loginEmail" className="form-label">
								Email
							</label>
							<input type="email" className="form-control" id="loginEmail" />
						</div>
						<div className="mb-3">
							<label htmlFor="loginContraseña" className="form-label">
								Contraseña
							</label>
							<input type="password" className="form-control" id="loginContraseña" />
						</div>
						<div className="mb-3">
							<a href="#" className="link">
								¿Olvidaste tu contraseña?
							</a>
						</div>
						<button type="submit" className="boton btn">
							Ingresar
						</button>
						<button type="submit" className="botonCrearCuenta btn ml-3">
							Crear una cuenta nueva
						</button>
					</form>
				</div>
				<div className="col-sm-12 col-md-6 div-derecha">
					<div className="mt-3 d-flex justify-content-center align-items-center">
						<h2>Otros medios de ingreso</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
