import React, { useState, useContext, useEffect } from "react";
import Imagen from "../../img/ImagenPerfilProfesional.jpg";

import { ProyectoProfesional } from "../component/proyectoProfesional";
import { InfoProfesional } from "../component/infoProfesional";
import { AgregarDetallesProf } from "../component/agregarDetallesProf";
import { Context } from "../store/appContext";

export const PerfilProfesional = () => {
	const { store, actions } = useContext(Context);
	const [editar, setEditar] = useState(false);

	useEffect(() => {
		actions.cargarInfoDePerfil();
	}, []);

	const editarPerfil = () => {
		setEditar(!editar);
		if (editar) {
			actions.editarProfesional();
			actions.cargarInfoDePerfil();
		}
	};

	useEffect(() => {
		if (!sessionStorage.getItem("token")) history.push("/login");
		if (store.tipoDeUsuario == "empresa") history.push("/login");
	}, []);

	return (
		<div className="perfilProfesionalFondo" style={{ backgroundImage: `url(${Imagen})` }}>
			<div className="perfil container pb-5 mb-5 shadow">
				<div className="row">
					<div className="col-sm-12 col-md-4 d-flex justify-content-center">
						<img
							className="avatar"
							src={`https://avatar.oxro.io/avatar.svg?name=${store.profesional.nombre +
								" " +
								store.profesional
									.apellido}&background=0000FF&color=023E8A&width=200px&height=200px&fontSize=100px&bold=true`}
						/>
					</div>
					<div className="col-sm-12 col-md-5 d-flex">
						{editar ? (
							<div className="col-sm align-self-center">
								<input
									id="nombre"
									className="form-control my-4"
									placeholder="Nombre"
									onChange={e => actions.setProfesional({ nombre: e.target.value })}
									value={store.profesional.nombre}
									required
								/>
								<input
									id="apellido"
									className="form-control my-4"
									placeholder="Apellido"
									onChange={e => actions.setProfesional({ apellido: e.target.value })}
									value={store.profesional.apellido}
									required
								/>
							</div>
						) : (
							<h1 className="mb-4 align-self-center">
								{store.profesional.nombre + " " + store.profesional.apellido}
							</h1>
						)}
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
						{store.profesional.descripcion.trim() != "" ? <h2>Descripcion</h2> : ""}
						{editar ? (
							<form>
								<textarea
									onChange={e =>
										e.target.value.trim() != ""
											? actions.setProfesional({ descripcion: e.target.value })
											: actions.setProfesional("")
									}
									value={store.profesional.descripcion}
									className="form-control"
									id="descripcionPerfil"
									rows="3"
								/>
							</form>
						) : (
							<p>{store.profesional.descripcion}</p>
						)}
					</div>
				</div>

				{!(
					store.profesional.estudios.length ||
					store.profesional.experiencias.length ||
					store.profesional.idiomas.length ||
					store.profesional.certificaciones.length
				) ? (
					<h2 className="text-center">Aún no hay información en este perfil.</h2>
				) : (
					""
				)}

				<div className="row my-2">
					<div className="col-sm-12 col-md-6 text-center">
						<div className="col my-2">
							{store.profesional.estudios.length != 0 ? <h2>Educacion</h2> : ""}
							<div className="detalles">
								{store.profesional.estudios.map((Educacion, index) => {
									return (
										<InfoProfesional
											key={index}
											index={index}
											editar={editar}
											descripcion={Educacion}
											tipo={"estudios"}
											profesional={true}
										/>
									);
								})}
							</div>

							{editar ? <AgregarDetallesProf tipo={"estudios"} /> : ""}
						</div>
						<div className="col my-2">
							{store.profesional.experiencias.length != 0 ? <h2>Experiencia</h2> : ""}
							<div className="detalles">
								{store.profesional.experiencias.map((Experiencia, index) => {
									return (
										<InfoProfesional
											key={index}
											index={index}
											editar={editar}
											descripcion={Experiencia}
											tipo={"experiencias"}
										/>
									);
								})}
							</div>

							{editar ? <AgregarDetallesProf tipo={"experiencias"} /> : ""}
						</div>
					</div>
					<div
						className={`col-sm-12 col-md-6 text-center ${
							store.profesional.estudios.length ||
							store.profesional.experiencias.length ||
							store.profesional.idiomas.length ||
							store.profesional.certificaciones.length
								? "div-derecha"
								: ""
						} `}>
						<div className="col my-2">
							{store.profesional.certificaciones.length != 0 ? <h2>Certificaciones</h2> : ""}
							<div className="detalles">
								{store.profesional.certificaciones.map((Certificacion, index) => {
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

							{editar ? <AgregarDetallesProf tipo={"certificaciones"} /> : ""}
						</div>
						<div className="col my-2">
							{store.profesional.idiomas.length != 0 ? <h2>Idiomas</h2> : ""}
							<div className="detalles">
								{store.profesional.idiomas.map((Idioma, index) => {
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

							{editar ? <AgregarDetallesProf tipo={"idiomas"} /> : ""}
						</div>
					</div>
				</div>
				<div className="row">
					{!editar ? (
						<>
							<div className="col-sm">
								<h4>Redes Sociales</h4>
							</div>
							<div className="col-sm">
								<h3>
									<i
										className="fab fa-github"
										onClick={() =>
											store.profesional.github.length != 0
												? window.open(
														`https://github.com/${store.profesional.github}`,
														"_blank"
												  )
												: ""
										}
									/>
								</h3>
							</div>
							<div className="col-sm">
								<h4>
									<i
										className="fab fa-linkedin"
										onClick={() =>
											store.profesional.linkedin.length != 0
												? window.open(
														`https://linkedin.com/in/${store.profesional.linkedin}`,
														"_blank"
												  )
												: ""
										}
									/>
								</h4>
							</div>
							<div className="col-sm">
								<h3>
									<i
										className="fab fa-twitter"
										onClick={() =>
											store.profesional.twitter.length != 0
												? window.open(
														`https://twitter.com/${store.profesional.twitter}`,
														"_blank"
												  )
												: ""
										}
									/>
								</h3>
							</div>
							<div className="col-sm">
								<h3>
									<i
										className="fab fa-facebook"
										onClick={() =>
											store.profesional.facebook.length != 0
												? window.open(
														`https://facebook.com/${store.profesional.facebook}`,
														"_blank"
												  )
												: ""
										}
									/>
								</h3>
							</div>
						</>
					) : (
						<div className="col-sm">
							<h4 className="text-justify">Redes Sociales</h4>
							<form>
								<div className="form-group row">
									{editar ? (
										<div className="col-sm">
											<div className="input-group mb-2">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fab fa-github" />
													</div>
												</div>
												<input
													id="github"
													className="form-control"
													placeholder="GitHub"
													onChange={e => actions.setProfesional({ github: e.target.value })}
													value={store.profesional.github}
													required
												/>
											</div>
										</div>
									) : (
										""
									)}
								</div>
								<div className="form-group row">
									{editar ? (
										<div className="col-sm">
											<div className="input-group mb-2">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fab fa-linkedin" />
													</div>
												</div>
												<input
													id="linkedin"
													className="form-control"
													placeholder="Linkedin"
													onChange={e => actions.setProfesional({ linkedin: e.target.value })}
													value={store.profesional.linkedin}
													required
												/>
											</div>
										</div>
									) : (
										""
									)}
								</div>
								<div className="form-group row">
									{editar ? (
										<div className="col-sm">
											<div className="input-group mb-2">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fab fa-twitter" />
													</div>
												</div>
												<input
													id="twitter"
													className="form-control"
													placeholder="Twitter"
													onChange={e => actions.setProfesional({ twitter: e.target.value })}
													value={store.profesional.twitter}
													required
												/>
											</div>
										</div>
									) : (
										""
									)}
								</div>
								<div className="form-group row">
									{editar ? (
										<div className="col-sm">
											<div className="input-group mb-2">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="fab fa-facebook" />
													</div>
												</div>
												<input
													id="facebook"
													className="form-control"
													placeholder="Facebook"
													onChange={e => actions.setProfesional({ facebook: e.target.value })}
													value={store.profesional.facebook}
													required
												/>
											</div>
										</div>
									) : (
										""
									)}
								</div>
							</form>
						</div>
					)}
				</div>
				<div className="row justify-content-center">
					<div className="col p-3">
						<h1 className="text-center">Proyectos</h1>
					</div>
					<div className="col-sm-11 col-md-10">
						<div className="listaProyectos">
							{Array.isArray(store.repos)
								? store.repos.map((repo, i) => {
										return <ProyectoProfesional key={i} proyecto={repo} />;
								  })
								: "No tiene repositorios publicos"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
