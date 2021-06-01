import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const RegistrarEmpresa = () => (
	<div className="container">
		<form>
			<h3>Completa tus datos</h3>
			<br />
			<div className="form-group row">
				<div className="col-sm-3">
					<label>Nombre de la empresa</label>
				</div>
				<div className="col-sm-5">
					<input type="text" placeholder="Nombre" id="nombre" className="form-control" />
				</div>
				<div className="col-sm-1">
					<label>Logo</label>
				</div>
				<div className="col-sm-3">
					<div className="custom-file">
						<input
							type="file"
							className="custom-file-input"
							id="customFileLang"
							lang="es"
							accept="image/*"
						/>
						<label className="custom-file-label" htmlFor="customFileLang">
							Seleccionar Archivo
						</label>
					</div>
				</div>
			</div>
			<hr />
			<div className="form-group row">
				<div className="col-sm-3">
					<label>Descripción de la empresa</label>
				</div>
				<div className="col-sm">
					<textarea className="form-control" placeholder="Descripción" />
				</div>
			</div>
			<hr />
			<div className="form=group row">
				<div className="col-sm-3">
					<label>Departamento</label>
				</div>
				<div className="col-sm">
					<select className="form-control">
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
					<label>Dirrección</label>
				</div>
				<div className="col-sm">
					<input className="form-control" placeholder="Dirrección" />
				</div>
			</div>
			<hr />
			<div className="form-group row">
				<div className="col-sm-3">
					<label>Sitio web de la empresa</label>
				</div>
				<div className="col-sm">
					<input className="form-control" placeholder="https://example.com/" />
				</div>
			</div>
			<hr />
			<div className="form-group row">
				<div className="col-sm-3">
					<label>Redes Sociales</label>
				</div>
				<div className="col-sm">
					<input className="form-control" placeholder="LinkedIn" />
					<br />
					<input className="form-control" placeholder="GitHub" />
					<br />
					<input className="form-control" placeholder="Facebook" />
					<br />
					<input className="form-control" placeholder="Twitter" />
				</div>
			</div>
			<hr />
			<div className="form-group row">
				<div className="col-sm-3">
					<label>Comentarios adicionales</label>
				</div>
				<div className="col-sm">
					<textarea className="form-control" placeholder="Comentarios" />
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
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
			</div>
			<div className="form-group row">
				<div className="col-sm-3">
					<label>Contraseña</label>
				</div>
				<div className="col-sm">
					<input type="password" className="form-control" placeholder="Contraseña" />
				</div>
			</div>
			<div className="form-group row">
				<div className="col-sm-3">
					<label>Repetir contraseña</label>
				</div>
				<div className="col-sm">
					<input type="password" className="form-control" placeholder="Repetir contraseña" />
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
