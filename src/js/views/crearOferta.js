import React, { useContext, useState, useEffect } from "react";

import { InfoProfesional } from "../component/infoProfesional";
import { AgregarDetallesProf } from "../component/agregarDetallesProf";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { RequisitosOferta } from "../component/requisitosOferta";

export const CrearOferta = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	const [nombre, setNombre] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [fecha, setFecha] = useState("");
	const [presencialidad, setPresencialidad] = useState("Elegir...");
	const [estado, setEstado] = useState("Activo");
	const crearOferta = async () => {
		const res = await actions.crearOferta(nombre, fecha, descripcion, presencialidad, estado);
		if (res) {
			history.push("/ofertas");
		}
	};

	useEffect(() => {
		if (!sessionStorage.getItem("token")) history.push("/login");
		if (store.tipoDeUsuario == "profesional") history.push("/login");
	}, []);

	return (
		<div className="container">
			<div className="formCrearOferta p-4 my-5 shadow-lg">
				<div className="row align-items-center">
					<div className="col-sm-12 col-md-6">
						<div className="form-group mx-2">
							<h2 className="text-light">Nombre</h2>
							<label className="sr-only" htmlFor="nombreOferta">
								Nombre
							</label>
							<input
								type="text"
								onChange={e =>
									e.target.value.trim() != "" ? setNombre(e.target.value) : setNombre("")
								}
								value={nombre}
								className="form-control"
								id="nombreOferta"
							/>
						</div>
						<div className="form-group mx-2">
							<h2 className="text-light">Descripcion de la oferta</h2>
							<label className="sr-only" htmlFor="descripcionCrearOferta">
								Descripcion de la oferta
							</label>
							<textarea
								onChange={e =>
									e.target.value.trim() != "" ? setDescripcion(e.target.value) : setDescripcion("")
								}
								className="form-control"
								id="descripcionCrearOferta"
								value={descripcion}
								rows="6"
							/>
						</div>
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="form-group">
							<h2 className="text-light">Fecha de finalización</h2>
							<input
								onChange={e => setFecha(e.target.value)}
								type="date"
								className="form-control"
								id="fechaOferta"
								value={fecha}
							/>
						</div>
						<div className="form-group">
							<h2 className="text-light">Presencialidad</h2>
							<label className="sr-only" htmlFor="presencialidad">
								Presencialidad
							</label>
							<select
								onChange={e => setPresencialidad(e.target.value)}
								value={presencialidad}
								id="presencialidad"
								className="form-control">
								<option selected>Elegir...</option>
								<option>Remoto</option>
								<option>Presencial</option>
							</select>
						</div>
						<div className="form-group">
							<h2 className="text-light">Estado</h2>
							<label className="sr-only" htmlFor="estado">
								estado
							</label>
							<select
								onChange={e => setEstado(e.target.value)}
								value={estado}
								id="estado"
								className="form-control">
								<option selected>Elegir...</option>
								<option>Activo</option>
								<option>Pausado</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="col-12 px-4 my-2 text-center">
					<div className="requisitos shadow p-4 my-2">
						<h2 className="text-light">Cualificaciones</h2>
						<div className="detalles text-light">
							{store.cualificaciones.map((Cualificacion, index) => {
								return (
									<RequisitosOferta
										key={index}
										index={index}
										descripcion={Cualificacion}
										tipo={"cualificaciones"}
									/>
								);
							})}
						</div>
						<div className="col-md-8 mt-2 mx-auto">
							<AgregarDetallesProf tipo={"cualificaciones"} />
						</div>
					</div>
				</div>
				<div className="col-12 px-4 my-2 text-center">
					<div className="requisitos shadow p-4 my-2">
						<h2 className="text-light">Habilidades Deseadas</h2>
						<div className="detalles text-light">
							{store.habilidades.map((Habilidad, index) => {
								return (
									<RequisitosOferta
										key={index}
										index={index}
										descripcion={Habilidad}
										tipo={"habilidades"}
									/>
								);
							})}
						</div>
						<div className="col-md-8 mt-2 mx-auto">
							<AgregarDetallesProf tipo={"habilidades"} />
						</div>
					</div>
				</div>
				<div className="col-12 px-4 my-2 text-center">
					<div className="requisitos shadow p-4 my-2">
						<h2 className="text-light">Condiciones</h2>
						<div className="detalles text-light">
							{store.condiciones.map((Condicion, index) => {
								return (
									<RequisitosOferta
										key={index}
										index={index}
										descripcion={Condicion}
										tipo={"condiciones"}
									/>
								);
							})}
						</div>
						<div className="col-md-8 mt-2 mx-auto">
							<AgregarDetallesProf tipo={"condiciones"} />
						</div>
					</div>
				</div>
				<div className="col-12 px-4 my-2 text-center">
					<div className="requisitos shadow p-4 my-2">
						<h2 className="text-light">Responsabilidades</h2>
						<div className="detalles text-light">
							{store.responsabilidades.map((Responsabilidad, index) => {
								return (
									<RequisitosOferta
										key={index}
										index={index}
										descripcion={Responsabilidad}
										tipo={"responsabilidades"}
									/>
								);
							})}
						</div>
						<div className="col-md-8 mt-2 mx-auto">
							<AgregarDetallesProf tipo={"responsabilidades"} />
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 mb-3 text-center">
					<button onClick={crearOferta} type="submit" className="boton btn">
						Guardar y crear Oferta
					</button>
				</div>
			</div>
		</div>
	);
};
