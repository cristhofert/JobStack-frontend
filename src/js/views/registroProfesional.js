import React, { useRef, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

export const RegistroProfesional = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const email = useRef(null);
	const password = useRef(null);
	const confirmPassword = useRef(null);
	const [alert, setAlert] = useState("");

	const registrar = async e => {
		setAlert("");
		e.preventDefault();
		if (password.current.value === confirmPassword.current.value) {
			const a = actions.registrarProfesional(email.current.value, password.current.value);
			a.then(object => {
				if (object.message) {
					setAlert(JSON.stringify(object.message));
				} else {
					setAlert("");
					history.push("/login");
				}
			});
		} else {
			setAlert("La contraseñas no coinciden");
		}
	};

	return (
		<div className="container my-auto">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-6">
					<h1>Crear una cuenta</h1>
					{alert != "" ? (
						<div className="alert alert-danger" role="alert">
							{alert}
						</div>
					) : (
						""
					)}
					<form onSubmit={registrar}>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								ref={email}
								type="email"
								className="inputRegistro form-control"
								id="email"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Contraseña</label>
							<input
								ref={password}
								type="password"
								className="inputRegistro form-control"
								id="password"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="confirmPassword">Confirmar contraseña</label>
							<input
								ref={confirmPassword}
								type="password"
								className="inputRegistro form-control"
								id="confirmPassword"
							/>
						</div>
						<div className="d-flex justify-content-center">
							<button type="submit" className="boton btn">
								Crear cuenta
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
