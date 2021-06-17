import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";
import GoogleLogin from "react-google-login";
import { Context } from "../store/appContext";

export const Login = () => {
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const login = async () => {
		const res = await actions.login(email, password);
		setEmail("");
		setPassword("");
		if (res) {
			history.push("/");
		} else {
			setError(true);
		}
	};

	/* const responseGoogle = async responseG => {
		const respuesta = await actions.loginGoogle(responseG.profileObj.email);
		if (respuesta) {
			history.push("/");
		} else {
			setError(true);
		}
		console.log(respuesta);
	}; */
	return (
		<div className="container my-auto">
			<div className="row">
				<div className="col-sm-12 col-md-6">
					<h1 id="title">Ingresar</h1>
					{error ? (
						<div className="alert alert-danger" role="alert">
							Email o contraseña incorrectos!
						</div>
					) : (
						""
					)}
					<form
						id="form"
						onSubmit={e => {
							e.preventDefault();
							login();
						}}>
						<div className="mb-3">
							<label htmlFor="loginEmail" className="form-label">
								Email
							</label>
							<input
								type="email"
								onChange={e => {
									setEmail(e.target.value);
								}}
								value={email}
								className="form-control"
								id="loginEmail"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="loginContraseña" className="form-label">
								Contraseña
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
					{/* <GoogleLogin
						clientId="1012985398043-k3re8g9vs1ahlk5nug7lvm3o0e2lnl6b.apps.googleusercontent.com"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
					/> */}
				</div>
			</div>
		</div>
	);
};
