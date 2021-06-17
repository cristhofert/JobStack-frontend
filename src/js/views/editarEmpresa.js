import React, { useState, useContext, useEffect } from "react";
import Imagen from "../../img/ImagenPerfilProfesional.jpg";

import { Ofertas } from "../component/ofertas";
import { Context } from "../store/appContext";
import md5 from "md5";

export const EditarEmpresa = () => {
	const { store, actions } = useContext(Context);
	const [editar, setEditar] = useState(false);

	useEffect(() => {
		actions.obtenerMiEmpresa();
	}, []);

	const editarPerfil = () => {
		setEditar(!editar);
		if (!editar) {
			actions.editarEmpresa();
		}
	};

	useEffect(() => {
		if (!sessionStorage.getItem("token")) history.push("/login");
		if (store.tipoDeUsuario == "profesional") history.push("/login");
	}, []);

	return (
		<div className="perfilProfesionalFondo" style={{ backgroundImage: `url(${Imagen})` }}>
			<div className="perfil container pb-5 mb-5 shadow">
				<div className="row">
					<div className="col-sm-12 col-md-4 d-flex justify-content-center">
						<div>
							<img
								className="logo_empresa"
								src={`https://www.gravatar.com/avatar/${md5(store.empresa.email)}?d=identicon&s=200`}
							/>
						</div>{" "}
					</div>
					<div className="col-sm-12 col-md-5 d-flex">
						{editar ? (
							<div className="col-sm align-self-center">
								<input
									id="nombre"
									className="form-control my-4"
									placeholder="Nombre"
									onChange={e => actions.setEmpresa({ nombre: e.target.value })}
									value={store.empresa.nombre}
									required
								/>
							</div>
						) : (
							<h1 className="mb-4 align-self-center">{store.empresa.nombre}</h1>
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
						{store.empresa.descripcion.length != 0 ? <h2>Descripcion</h2> : ""}
						{editar ? (
							<form>
								<textarea
									onChange={e => actions.setEmpresa({ descripcion: e.target.value })}
									value={store.empresa.descripcion}
									className="form-control"
									id="descripcion"
									rows="3"
									placeholder="Descripcion"
								/>
							</form>
						) : (
							<p>{store.empresa.descripcion}</p>
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
													onChange={e => actions.setEmpresa({ sitioweb: e.target.value })}
													value={store.empresa.sitioweb}
													required
												/>
											</div>
										) : (
											<p className="col-sm">{store.empresa.sitioweb}</p>
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
														onChange={e =>
															actions.setEmpresa({ departamento: e.target.value })
														}
														value={store.empresa.departamento}
														required
													/>
												</div>
											) : (
												<p className="col-sm">{store.empresa.departamento}</p>
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
														onChange={e =>
															actions.setEmpresa({ direccion: e.target.value })
														}
														value={store.empresa.direccion}
														required
													/>
												</div>
											) : (
												<p className="col-sm">{store.empresa.direccion}</p>
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
													store.empresa.github.length != 0
														? window.open(`https://github.com/${github}`, "_blank")
														: ""
												}
											/>
										</h3>
										<h4>
											<i
												className="fab fa-linkedin"
												onClick={() =>
													store.empresa.linkedin.length != 0
														? window.open(`https://linkedin.com/in/${linkedin}`, "_blank")
														: ""
												}
											/>
										</h4>

										<h3>
											<i
												className="fab fa-twitter"
												onClick={() =>
													store.empresa.twitter.length != 0
														? window.open(`https://twitter.com/${twitter}`, "_blank")
														: ""
												}
											/>
										</h3>

										<h3>
											<i
												className="fab fa-facebook"
												onClick={() =>
													store.empresa.facebook.length != 0
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
															onChange={e =>
																actions.setEmpresa({ github: e.target.value })
															}
															value={store.empresa.github}
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
															onChange={e =>
																actions.setEmpresa({ linkedin: e.target.value })
															}
															value={store.empresa.linkedin}
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
															onChange={e =>
																actions.setEmpresa({ twitter: e.target.value })
															}
															value={store.empresa.twitter}
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
															onChange={e =>
																actions.setEmpresa({ facebook: e.target.value })
															}
															value={store.empresa.facebook}
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
						{store.empresa.comentarios.length != 0 ? <h2>Comentarios adicionales</h2> : ""}
						{editar ? (
							<form>
								<textarea
									onChange={e => actions.setEmpresa({ comentarios: e.target.value })}
									value={store.empresa.comentarios}
									className="form-control"
									id="comentarios"
									rows="3"
									placeholder="Comentarios adicionales"
								/>
							</form>
						) : (
							<p>{store.empresa.comentarios}</p>
						)}
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col p-3">
						<h1 className="text-center">Ofertas de trabajo</h1>
					</div>
					<div className="col-sm-11 col-md-10">
						<div className="listaProyectos">
							{store.user.ofertas.map(oferta => {
								return <Ofertas key={oferta.id} oferta={oferta} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
