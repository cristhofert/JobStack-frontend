import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";
import GoogleLogin from "react-google-login";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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

	const responseGoogle = async responseG => {
		if (responseG.profileObj) {
			const respuesta = await actions.loginGoogle(responseG.profileObj.email);
			if (respuesta) {
				history.push("/");
			} else {
				setError(true);
			}
		}
	};
	return (
		<div className="container my-auto ">
			<div className="row justify-content-center">
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
						<Link to="/recuperarContraseña">
							<div className="rounded">
								<div className="mb-3">¿Olvidaste tu contraseña?</div>
							</div>
						</Link>
						<button type="submit" className="boton btn">
							Ingresar
						</button>
						<button type="submit" className="botonCrearCuenta btn mx-3">
							Crear una cuenta nueva
						</button>
						<GoogleLogin
							clientId="1012985398043-k3re8g9vs1ahlk5nug7lvm3o0e2lnl6b.apps.googleusercontent.com"
							buttonText="Iniciar sesión con Google"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={"single_host_origin"}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
