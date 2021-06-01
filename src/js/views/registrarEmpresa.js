import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const RegistrarEmpresa = () => {
	const [nombre, setNombre] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [departamento, setDepartamento] = useState("");
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

	const registrar = e => {
		e.preventDefault();
		console.log({
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
			repetir_contrasenna
		});
	};

	return (
		<div className="container">
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
							value={departamento}>
							<option>MONTEVIDEO</option>
							<option>ARTIGAS</option>
							<option>CANELONES</option>
							<option>CERRO LARGO</option>
							<option>COLONIA</option>
							<option>DURAZNO</option>
							<option>FLORES</option>
							<option>FLORIDA</option>
							<option>LAVALLEJA</option>
							<option>MALDONADO</option>
							<option>PAYSANDU</option>
							<option>RIO NEGRO</option>
							<option>RIVERA</option>
							<option>ROCHA</option>
							<option>SALTO</option>
							<option>SAN JOSE</option>
							<option>SORIANO</option>
							<option>TACUAREMBO</option>
							<option>TREINTA Y TRES</option>
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
						/>
						<br />
						<input
							id="github"
							className="form-control"
							placeholder="GitHub"
							onChange={e => setGithub(e.target.value)}
							value={github}
						/>
						<br />
						<input
							id="facebook"
							className="form-control"
							placeholder="Facebook"
							onChange={e => setFacebook(e.target.value)}
							value={facebook}
						/>
						<br />
						<input
							id="twitter"
							className="form-control"
							placeholder="Twitter"
							onChange={e => setTwitter(e.target.value)}
							value={twitter}
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
						/>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-sm-3" />
					<div className="col-sm">
						<h4>Datos de Inisio de Sesión</h4>
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
						/>
					</div>
				</div>
				<div className="form-group row">
					<div className="col" />
					<div className="col-1">
						<button type="submit" className="btn btn-primary">
							Registrarse
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
