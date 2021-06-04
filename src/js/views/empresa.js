import React, { useState, useContext, useEffect } from "react";
import Imagen from "../../img/ImagenPerfilProfesional.jpg";
import { useParams } from "react-router-dom";

import { ProyectoProfesional } from "../component/proyectoProfesional";
import { InfoProfesional } from "../component/infoProfesional";
import { Ofertas } from "../component/ofertas";
import { Context } from "../store/appContext";

export const Empresa = () => {
	const { store, actions } = useContext(Context);
	const [descripcion, setDescripcion] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non consectetur sapien. Suspendisse feugiat lectus lacus, a hendrerit enim gravida sit amet. Maecenas convallis dui in placerat aliquet. Cras leo dolor, scelerisque id mi in, feugiat maximus urna."
	);
	const [comentarios, setComentarios] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non consectetur sapien. Suspendisse feugiat lectus lacus, a hendrerit enim gravida sit amet. Maecenas convallis dui in placerat aliquet. Cras leo dolor, scelerisque id mi in, feugiat maximus urna."
	);
	const [sitioweb, setSitioweb] = useState("https://www.empre.com");
	const [departamento, setDepartamento] = useState("SAN JOSE");
	const [direccion, setDireccion] = useState("HERRERA 657");
	const [github, setGithub] = useState("empre");
	const [linkedin, setLinkedin] = useState("empre");
	const [twitter, setTwitter] = useState("empre");
	const [facebook, setFacebook] = useState("empre");
	const [id, setId] = useState(1);
	const [nombre, setNombre] = useState("EMPRE S.A.");
	const params = useParams();
	useEffect(() => {
		actions.obtenerEmpresa(params.id);
		if (store.empresa) {
			setDescripcion(store.empresa.descripcion);
			setComentarios(store.empresa.comentarios);
			setSitioweb(store.empresa.sitioweb);
			setDepartamento(store.empresa.descripcion);
			setDireccion(store.empresa.direccion);
			setGithub(store.empresa.github);
			setLinkedin(store.empresa.linkedin);
			setTwitter(store.empresa.twitter);
			setFacebook(store.empresa.facebook);
			setNombre(store.empresa.nombre);
			setId(store.empresa.id);
		}
	}, []);

	return (
		<div className="perfilProfesionalFondo" style={{ backgroundImage: `url(${Imagen})` }}>
			<div className="perfil container pb-5 mb-5 shadow">
				<div className="row">
					<div className="col-sm-12 col-md-4 d-flex justify-content-center">
						<div className="FotoPerfilProfesional" />
					</div>
					<div className="col-sm-12 col-md-5 d-flex">
						<h1 className="mb-4 align-self-center">{nombre}</h1>
					</div>
					<div className="col-sm-12 col-md-3 d-flex justify-content-center" />
				</div>

				<div className="row">
					<div className="col px-5 mb-4">
						{descripcion.length != 0 ? <h2>Descripcion</h2> : ""}

						<p>{descripcion}</p>
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
										<p
											className="col-sm"
											onClick={() =>
												sitioweb.length != 0 ? window.open(sitioweb, "_blank") : ""
											}>
											{sitioweb}
										</p>
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
											<p className="col-sm">{departamento}</p>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-3">
											<label>Dirección: </label>
										</div>
										<div className="col-sm">
											<p className="col-sm">{direccion}</p>
										</div>
									</div>
								</form>
							</div>

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
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col px-5 mb-4">
						{comentarios.length != 0 ? <h2>Comentarios adicionales</h2> : ""}

						<p>{comentarios}</p>
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
