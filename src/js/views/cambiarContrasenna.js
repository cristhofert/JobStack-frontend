import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";

import { Context } from "../store/appContext";

export const CambiarContraseña = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [password, setPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState(false);
	const [errorNewPassword, setErrorNewPassword] = useState(false);
	const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

	const cambiarContraseña = async () => {
		if (newPassword == confirmPassword) {
			actions.cambiarContrasenna(newPassword, password);
			setPassword("");
			setNewPassword("");
			setConfirmPassword("");
		}
	};

	useEffect(() => {
		if (!sessionStorage.getItem("token")) history.push("/login");
	}, []);

	return (
		<div className="container my-auto">
			<div className="row">
				<div className="col-sm-12 col-md-6 mt-4">
					<h3 id="title">Cambiar Contraseña</h3>

					<form
						id="form"
						onSubmit={e => {
							e.preventDefault();
							cambiarContraseña();
						}}>
						<div className="mb-3">
							<label htmlFor="loginContraseña" className="form-label">
								Contraseña anterior
							</label>
							<input
								type="password"
								onChange={e => {
									setPassword(e.target.value);
								}}
								value={password}
								className="form-control"
								id="loginContraseña"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="loginContraseña" className="form-label">
								Contraseña nueva
							</label>
							<input
								type="password"
								onChange={e => {
									setNewPassword(e.target.value);
								}}
								value={newPassword}
								className="form-control"
								id="loginContraseña"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="loginContraseña" className="form-label">
								Repetir contraseña
							</label>
							<input
								type="password"
								onChange={e => {
									setConfirmPassword(e.target.value);
								}}
								value={confirmPassword}
								className="form-control"
								id="loginContraseña"
							/>
						</div>
						<button type="submit" className="boton btn mb-4">
							Cambiar Contraseña
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
