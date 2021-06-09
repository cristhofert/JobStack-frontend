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
		}
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
