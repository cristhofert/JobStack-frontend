import React, { useState, useContext, useEffect } from "react";
import Imagen from "../../img/ImagenPerfilProfesional.jpg";

import { ProyectoProfesional } from "../component/proyectoProfesional";
import { InfoProfesional } from "../component/infoProfesional";
import { Ofertas } from "../component/ofertas";
import { Context } from "../store/appContext";

export const EditarEmpresa = () => {
	const { store, actions } = useContext(Context);
	const [editar, setEditar] = useState(false);
	const [descripcion, setDescripcion] = useState("");
	const [comentarios, setComentarios] = useState("");
	const [sitioweb, setSitioweb] = useState("");
	const [departamento, setDepartamento] = useState("");
	const [direccion, setDireccion] = useState("");
	const [github, setGithub] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [twitter, setTwitter] = useState("");
	const [facebook, setFacebook] = useState("");
	const [id, setId] = useState(0);
	const [nombre, setNombre] = useState("Nombre Empresa");

	/*     useEffect(() => {
        actions.obtenerMiEmpresa()
        setDescripcion(store.empresa.descripcion)
        setComentarios(store.empresa.comentarios)
        setSitioweb(store.empresa.sitioweb)
        setDepartamento(store.empresa.descripcion)
        setDireccion(store.empresa.direccion)
        setGithub(store.empresa.github)
        setLinkedin(Store.empresa.linkedin)
        setTwitter(store.empresa.twitter)
        setFacebook(store.empresa.facebook)
        setNombre(store.empresa.nombre)
        setId(store.empresa.id)
    }, []);

    useEffect(() => {
        actions.editarEmprea({
            id , descripcion,comentarios,sitioweb,departamento,direccion,github,linkedin,twitter,facebook, nombre
        })
    }, [editar]) */

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
						{editar ? (
							<div className="col-sm">
								<input
									id="nombre"
									className="form-control"
									placeholder="Nombre"
									onChange={e => setNombre(e.target.value)}
									value={nombre}
									required
								/>
							</div>
						) : (
							<h1 className="mb-4 align-self-center">{nombre}</h1>
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
						{descripcion.length != 0 ? <h2>Descripcion</h2> : ""}
						{editar ? (
							<form>
								<textarea
									onChange={e => setDescripcion(e.target.value)}
									value={descripcion}
									className="form-control"
									id="descripcion"
									rows="3"
									placeholder="Descripcion"
								/>
							</form>
						) : (
							<p>{descripcion}</p>
						)}
					</div>
				</div>
				<div className="row">
					<div className="container col px-5 mb-4">
						<div className="row">
							<div className="col-sm">
								<form>
									<div className="form-group row">
										<div className="col-sm">
											<h2>Sitio web de la empresa</h2>
										</div>
									</div>
									<div className="form-group row">
										{editar ? (
											<div className="col-sm">
												<input
													id="sitioweb"
													className="form-control"
													placeholder="Sitio Web"
													onChange={e => setSitioweb(e.target.value)}
													value={sitioweb}
													required
												/>
											</div>
										) : (
											<p className="col-sm">{sitioweb}</p>
										)}
									</div>
									<div className="form-group row">
										<div className="col-sm">
											<h2>Ubicación</h2>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-3">
											<label>Departamento: </label>
										</div>
										<div className="col-sm">
											{editar ? (
												<div className="col-sm">
													<input
														id="departamento"
														className="form-control"
														placeholder="Departamento"
														onChange={e => setDepartamento(e.target.value)}
														value={departamento}
														required
													/>
												</div>
											) : (
												<p className="col-sm">{departamento}</p>
											)}
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-3">
											<label>Dirección: </label>
										</div>
										<div className="col-sm">
											{editar ? (
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
											) : (
												<p className="col-sm">{direccion}</p>
											)}
										</div>
									</div>
								</form>
							</div>
							{!editar ? (
								<div className="col-sm-2 text-center div-derecha">
									<div className="col my-2">
										<h4>Redes Sociales</h4>
										<h3>
											<i
												className="fab fa-github"
												onClick={() =>
													github.length != 0
														? window.open(`https://github.com/${github}`, "_blank")
														: ""
												}
											/>
										</h3>
										<h4>
											<i
												className="fab fa-linkedin"
												onClick={() =>
													linkedin.length != 0
														? window.open(`https://linkedin.com/in/${linkedin}`, "_blank")
														: ""
												}
											/>
										</h4>

										<h3>
											<i
												className="fab fa-twitter"
												onClick={() =>
													twitter.length != 0
														? window.open(`https://twitter.com/${twitter}`, "_blank")
														: ""
												}
											/>
										</h3>

										<h3>
											<i
												className="fab fa-facebook"
												onClick={() =>
													facebook.length != 0
														? window.open(`https://facebook.com/${facebook}`, "_blank")
														: ""
												}
											/>
										</h3>
									</div>
								</div>
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
															onChange={e => setGithub(e.target.value)}
															value={github}
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
															onChange={e => setLinkedin(e.target.value)}
															value={linkedin}
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
															onChange={e => setTwitter(e.target.value)}
															value={twitter}
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
															onChange={e => setFacebook(e.target.value)}
															value={facebook}
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
					</div>
				</div>
				<div className="row">
					<div className="col px-5 mb-4">
						{comentarios.length != 0 ? <h2>Comentarios adicionales</h2> : ""}
						{editar ? (
							<form>
								<textarea
									onChange={e => setComentarios(e.target.value)}
									value={comentarios}
									className="form-control"
									id="comentarios"
									rows="3"
									placeholder="Comentarios adicionales"
								/>
							</form>
						) : (
							<p>{comentarios}</p>
						)}
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col p-3">
						<h1 className="text-center">Ofertas de trabajo</h1>
					</div>
					<div className="col-sm-11 col-md-10">
						<div className="listaProyectos">
							<Ofertas />
							<Ofertas />
							<Ofertas />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
