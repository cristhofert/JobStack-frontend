import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const RegistrarEmpresa = () => {
	const [nombre, setNombre] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [departamento, setDepartamento] = useState("MONTEVIDEO");
	const [direccion, setDireccion] = useState("");
	const [sitio_web, setSitio_web] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [github, setGithub] = useState("");
	const [facebook, setFacebook] = useState("");
	const [twitter, setTwitter] = useState("");
	const [comentarios, setComentarios] = useState("");
	const [email, setEmail] = useState("");
	const [contrasenna, setContrasenna] = useState("");
	const [repetir_contrasenna, setRepetir_contrasenna] = useState("");
	const [alerta, setAlerta] = useState("");

	const { store, actions } = useContext(Context);

	const registrar = e => {
		e.preventDefault();
		setAlerta("");
		if (contrasenna === repetir_contrasenna) {
			actions.registrarEmpresa({
				nombre,
				descripcion,
				departamento,
				direccion,
				sitio_web,
				linkedin,
				github,
				facebook,
				twitter,
				comentarios,
				email,
				contrasenna,
				icono: nombre
			});
		} else {
			setAlerta("Contraseña no coincide");
		}
	};

	return (
		<div className="container">
			{alerta != "" ? (
				<div className="alert alert-danger" role="alert">
					{alerta}
				</div>
			) : (
				""
			)}
			<form onSubmit={registrar}>
				<h3>Completa tus datos</h3>
				<br />
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Nombre de la empresa</label>
					</div>
					<div className="col-sm">
						<input
							id="nombre"
							type="text"
							placeholder="Nombre"
							className="form-control"
							onChange={e => setNombre(e.target.value)}
							value={nombre}
							required
						/>
					</div>
				</div>
				<hr />
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Descripción de la empresa</label>
					</div>
					<div className="col-sm">
						<textarea
							id="descripcion"
							className="form-control"
							placeholder="Descripción"
							onChange={e => setDescripcion(e.target.value)}
							value={descripcion}
							required
						/>
					</div>
				</div>
				<hr />
				<div className="form=group row">
					<div className="col-sm-3">
						<label>Departamento</label>
					</div>
					<div className="col-sm">
						<select
							id="departamento"
							className="form-control"
							onChange={e => setDepartamento(e.target.value)}
							value={departamento}
							required>
							<option selected value="MONTEVIDEO">
								MONTEVIDEO
							</option>
							<option value="ARTIGAS">ARTIGAS</option>
							<option value="CANELONES">CANELONES</option>
							<option value="CERRO LARGO">CERRO LARGO</option>
							<option value="COLONIA">COLONIA</option>
							<option value="DURAZNO">DURAZNO</option>
							<option value="FLORES">FLORES</option>
							<option value="FLORIDA">FLORIDA</option>
							<option value="LAVALLEJA">LAVALLEJA</option>
							<option value="MALDONADO">MALDONADO</option>
							<option value="PAYSANDU">PAYSANDU</option>
							<option value="RIO NEGRO">RIO NEGRO</option>
							<option value="RIVERA">RIVERA</option>
							<option value="ROCHA">ROCHA</option>
							<option value="SALTO">SALTO</option>
							<option value="SAN JOSE">SAN JOSE</option>
							<option value="SORIANO">SORIANO</option>
							<option value="TACUAREMBO">TACUAREMBO</option>
							<option value="TREINTA Y TRES">TREINTA Y TRES</option>
						</select>
					</div>
				</div>
				<br />
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Dirección</label>
					</div>
					<div className="col-sm">
						<input
							id="direccion"
							className="form-control"
							placeholder="Dirección"
							onChange={e => setDireccion(e.target.value)}
							value={direccion}
							required
						/>
					</div>
				</div>
				<hr />
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Sitio web de la empresa</label>
					</div>
					<div className="col-sm">
						<input
							id="sitio_web"
							className="form-control"
							placeholder="https://example.com/"
							onChange={e => setSitio_web(e.target.value)}
							value={sitio_web}
							required
						/>
					</div>
				</div>
				<hr />
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Redes Sociales</label>
					</div>
					<div className="col-sm">
						<input
							id="linkedin"
							className="form-control"
							placeholder="LinkedIn"
							onChange={e => setLinkedin(e.target.value)}
							value={linkedin}
							required
						/>
						<br />
						<input
							id="github"
							className="form-control"
							placeholder="GitHub"
							onChange={e => setGithub(e.target.value)}
							value={github}
							required
						/>
						<br />
						<input
							id="facebook"
							className="form-control"
							placeholder="Facebook"
							onChange={e => setFacebook(e.target.value)}
							value={facebook}
							required
						/>
						<br />
						<input
							id="twitter"
							className="form-control"
							placeholder="Twitter"
							onChange={e => setTwitter(e.target.value)}
							value={twitter}
							required
						/>
					</div>
				</div>
				<hr />
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Comentarios adicionales</label>
					</div>
					<div className="col-sm">
						<textarea
							id="comentarios"
							className="form-control"
							placeholder="Comentarios"
							onChange={e => setComentarios(e.target.value)}
							value={comentarios}
							required
						/>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-sm-3" />
					<div className="col-sm">
						<h4>Datos de Inicio de Sesión</h4>
						<br />
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Email address</label>
					</div>
					<div className="col-sm">
						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Contraseña</label>
					</div>
					<div className="col-sm">
						<input
							id="contrasenna"
							type="password"
							className="form-control"
							placeholder="Contraseña"
							onChange={e => setContrasenna(e.target.value)}
							value={contrasenna}
							required
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm-3">
						<label>Repetir contraseña</label>
					</div>
					<div className="col-sm">
						<input
							id="repetir_contrasenna"
							type="password"
							className="form-control"
							placeholder="Repetir contraseña"
							onChange={e => setRepetir_contrasenna(e.target.value)}
							value={repetir_contrasenna}
							required
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col-sm" />
					<div className="col-sm-2">
						<button type="submit" className="form-control btn btn-primary">
							Registrarse
						</button>
					</div>
				</div>
			</form>
			{alerta != "" ? (
				<div className="alert alert-danger" role="alert">
					{alerta}
				</div>
			) : (
				""
			)}
		</div>
	);
};
