import React, { useContext, useState } from "react";

import { InfoProfesional } from "../component/infoProfesional";
import { AgregarDetallesProf } from "../component/agregarDetallesProf";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const CrearOferta = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	const [nombre, setNombre] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [fecha, setFecha] = useState("");
	const [politicaTeletrabajo, setPoliticaTeletrabajo] = useState("");
	const crearOferta = async () => {
		const res = await actions.crearOferta(nombre, fecha, descripcion, politicaTeletrabajo);
		if (res) {
			history.push("/ofertas");
		}
	};
	return (
		<div className="container">
			<div className="row align-items-center my-4">
				<div className="col-sm-12 col-md-3 text-center my-2">
					<h1>Nombre:</h1>
				</div>
				<div className="col-sm-12 col-md-6 my-2">
					<input
						type="text"
						onChange={e => (e.target.value.trim() != "" ? setNombre(e.target.value) : setNombre(""))}
						value={nombre}
						className="form-control m-2"
						id="nombreOferta"
					/>
				</div>
				<div className="col-sm-12 col-md-3 my-2 text-center">
					<button onClick={crearOferta} type="submit" className="boton btn">
						Guardar y crear Oferta
					</button>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="form-group mx-4">
						<label htmlFor="descripcionCrearOferta">Descripcion de la oferta:</label>
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
				<div className="col-sm-12 col-md-3">
					<div className="form-group mx-4">
						<input
							onChange={e => setFecha(e.target.value)}
							type="date"
							className="form-control"
							id="fechaOferta"
							value={fecha}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12 px-4 my-2">
					<h2>Cualificaciones</h2>
					<div className="detalles">
						{store.cualificaciones.map((Cualificacion, index) => {
							return (
								<InfoProfesional
									key={index}
									index={index}
									editar={true}
									descripcion={Cualificacion}
									tipo={"cualificaciones"}
									profesional={false}
								/>
							);
						})}
					</div>
					<AgregarDetallesProf tipo={"cualificaciones"} />
				</div>
				<div className="col-12 px-4 my-2">
					<h2>Habilidades Deseadas</h2>
					<div className="detalles">
						{store.habilidades.map((Habilidad, index) => {
							return (
								<InfoProfesional
									key={index}
									index={index}
									editar={true}
									descripcion={Habilidad}
									tipo={"habilidades"}
									profesional={false}
								/>
							);
						})}
					</div>
					<AgregarDetallesProf tipo={"habilidades"} />
				</div>
				<div className="col-12 px-4 my-2">
					<h2>Condiciones</h2>
					<div className="detalles">
						{store.condiciones.map((Condicion, index) => {
							return (
								<InfoProfesional
									key={index}
									index={index}
									editar={true}
									descripcion={Condicion}
									tipo={"condiciones"}
									profesional={false}
								/>
							);
						})}
					</div>
					<AgregarDetallesProf tipo={"condiciones"} />
				</div>
				<div className="col-12 px-4 my-2">
					<h2>Responsabilidades</h2>
					<div className="detalles">
						{store.responsabilidades.map((Responsabilidad, index) => {
							return (
								<InfoProfesional
									key={index}
									index={index}
									editar={true}
									descripcion={Responsabilidad}
									tipo={"responsabilidades"}
									profesional={false}
								/>
							);
						})}
					</div>
					<AgregarDetallesProf tipo={"responsabilidades"} />
				</div>

				<div className="col-12 px-4 my-2">
					<h2>Politica de trabajo remoto</h2>
					<input
						type="text"
						onChange={e => {
							e.target.value.trim() != ""
								? setPoliticaTeletrabajo(e.target.value)
								: setPoliticaTeletrabajo("");
						}}
						value={politicaTeletrabajo}
						className="form-control m-2"
						id="politicaTrabajoRemoto"
					/>
				</div>
			</div>
		</div>
	);
};
