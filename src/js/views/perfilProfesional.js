import React, { useState, useContext } from "react";
import Imagen from "../../img/ImagenPerfilProfesional.jpg";

import { ProyectoProfesional } from "../component/proyectoProfesional";
import { InfoProfesional } from "../component/infoProfesional";
import { Context } from "../store/appContext";

export const PerfilProfesional = () => {
	const { store, actions } = useContext(Context);
	const [editar, setEditar] = useState(false);
	const [descripcionPerfil, setDescripcionPerfil] = useState("");
	const [agregarEducacion, setAgregarEducacion] = useState("");
	const [agregarExperiencia, setAgregarExperiencia] = useState("");
	const [agregarCertificacion, setAgregarCertificacion] = useState("");
	const [agregarIdioma, setAgregarIdioma] = useState("");

	const editarPerfil = () => {
		setEditar(!editar);
	};
	return (
		<div className="perfilProfesionalFondo" style={{ backgroundImage: `url(${Imagen})` }}>
			<div className="perfil container pb-5 mb-5 shadow">
				<div className="row">
					<div className="col-sm-12 col-md-4 d-flex justify-content-center">
						<div className="FotoPerfilProfesional" />
					</div>
					<div className="col-sm-12 col-md-5 d-flex">
						<h1 className="mb-4 align-self-center">Nombre Apellido</h1>
					</div>
					<div className="col-sm-12 col-md-3 d-flex justify-content-center">
						<button onClick={editarPerfil} className="mb-4 mr-2 btn btn-primary align-self-center boton">
							{editar ? "Guardar cambios" : "Editar Perfil"}
						</button>
						{editar ? (
							<button className="mb-4 btn btn-primary align-self-center boton">Cambiar contraseña</button>
						) : (
							""
						)}
					</div>
				</div>

				<div className="row">
					<div className="col px-5 mb-4">
						{descripcionPerfil.length != 0 ? <h2>Descripcion</h2> : ""}
						{editar ? (
							<form>
								<textarea
									onChange={e => setDescripcionPerfil(e.target.value)}
									value={descripcionPerfil}
									className="form-control"
									id="descripcionPerfil"
									rows="3"
								/>
							</form>
						) : (
							<p>{descripcionPerfil}</p>
						)}
					</div>
				</div>

				{!(
					store.educacion.length ||
					store.experiencia.length ||
					store.idiomas.length ||
					store.certificaciones.length
				) ? (
					<h2 className="text-center">Aún no hay información en este perfil.</h2>
				) : (
					""
				)}

				<div className="row my-2">
					<div className="col-sm-12 col-md-6 text-center">
						<div className="col my-2">
							{store.educacion.length != 0 ? <h2>Educacion</h2> : ""}
							<div className="detalles">
								{store.educacion.map((Educacion, index) => {
									return (
										<InfoProfesional
											key={index}
											index={index}
											editar={editar}
											descripcion={Educacion}
											tipo={"educacion"}
										/>
									);
								})}
							</div>

							{editar ? (
								<div className="mx-3">
									<form
										onSubmit={e => {
											e.preventDefault();
											setAgregarEducacion("");
											actions.agregarDetalle(agregarEducacion, "educacion");
										}}
										className="form">
										<div className="row">
											<div className="col-sm-12 col-md-9 px-1">
												<input
													type="text"
													className="form-control"
													onChange={e => {
														setAgregarEducacion(e.target.value);
													}}
													value={agregarEducacion}
													placeholder="Agregar educacion"
												/>
											</div>
											<div className="col-sm-12 col-md-3 px-1">
												<button type="submit" className="boton btn btn-primary">
													Agregar
												</button>
											</div>
										</div>
									</form>
								</div>
							) : (
								""
							)}
						</div>
						<div className="col my-2">
							{store.experiencia.length != 0 ? <h2>Experiencia</h2> : ""}
							<div className="detalles">
								{store.experiencia.map((Experiencia, index) => {
									return (
										<InfoProfesional
											key={index}
											index={index}
											editar={editar}
											descripcion={Experiencia}
											tipo={"experiencia"}
										/>
									);
								})}
							</div>

							{editar ? (
								<div className="mx-3">
									<form
										onSubmit={e => {
											e.preventDefault();
											setAgregarExperiencia("");
											actions.agregarDetalle(agregarExperiencia, "experiencia");
										}}
										className="form">
										<div className="row">
											<div className="col-sm-12 col-md-9 px-1">
												<input
													type="text"
													className="form-control"
													onChange={e => {
														setAgregarExperiencia(e.target.value);
													}}
													value={agregarExperiencia}
													placeholder="Agregar experiencia"
												/>
											</div>
											<div className="col-sm-12 col-md-3 px-1">
												<button type="submit" className="boton btn btn-primary">
													Agregar
												</button>
											</div>
										</div>
									</form>
								</div>
							) : (
								""
							)}
						</div>
					</div>
					<div
						className={`col-sm-12 col-md-6 text-center ${
							store.educacion.length ||
							store.experiencia.length ||
							store.idiomas.length ||
							store.certificaciones.length
								? "div-derecha"
								: ""
						} `}>
						<div className="col my-2">
							{store.certificaciones.length != 0 ? <h2>Certificaciones</h2> : ""}
							<div className="detalles">
								{store.certificaciones.map((Certificacion, index) => {
									return (
										<InfoProfesional
											key={index}
											index={index}
											editar={editar}
											descripcion={Certificacion}
											tipo={"certificaciones"}
										/>
									);
								})}
							</div>

							{editar ? (
								<div className="mx-3">
									<form
										onSubmit={e => {
											e.preventDefault();
											setAgregarCertificacion("");
											actions.agregarDetalle(agregarCertificacion, "certificaciones");
										}}
										className="form">
										<div className="row">
											<div className="col-sm-12 col-md-9 px-1">
												<input
													type="text"
													className="form-control"
													onChange={e => {
														setAgregarCertificacion(e.target.value);
													}}
													value={agregarCertificacion}
													placeholder="Agregar certificaciones"
												/>
											</div>
											<div className="col-sm-12 col-md-3 px-1">
												<button type="submit" className="boton btn btn-primary">
													Agregar
												</button>
											</div>
										</div>
									</form>
								</div>
							) : (
								""
							)}
						</div>
						<div className="col my-2">
							{store.idiomas.length != 0 ? <h2>Idiomas</h2> : ""}
							<div className="detalles">
								{store.idiomas.map((Idioma, index) => {
									return (
										<InfoProfesional
											key={index}
											index={index}
											editar={editar}
											descripcion={Idioma}
											tipo={"idiomas"}
										/>
									);
								})}
							</div>

							{editar ? (
								<div className="mx-3">
									<form
										onSubmit={e => {
											e.preventDefault();
											setAgregarIdioma("");
											actions.agregarDetalle(agregarIdioma, "idiomas");
										}}
										className="form">
										<div className="row">
											<div className="col-sm-12 col-md-9 px-1">
												<input
													type="text"
													className="form-control"
													onChange={e => {
														setAgregarIdioma(e.target.value);
													}}
													value={agregarIdioma}
													placeholder="Agregar idiomas"
												/>
											</div>
											<div className="col-sm-12 col-md-3 px-1">
												<button type="submit" className="boton btn btn-primary">
													Agregar
												</button>
											</div>
										</div>
									</form>
								</div>
							) : (
								""
							)}
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col p-3">
						<h1 className="text-center">Proyectos</h1>
					</div>
					<div className="col-sm-11 col-md-10">
						<div className="listaProyectos">
							<ProyectoProfesional />
							<ProyectoProfesional />
							<ProyectoProfesional />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
