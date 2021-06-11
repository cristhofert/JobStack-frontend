import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { AgregarDetallesOferta } from "../component/agregarDetallesOferta";
import { RequisitosOferta } from "../component/requisitosOferta";
import { useHistory } from "react-router-dom";

export const EditarOferta = () => {
	const params = useParams();
	let history = useHistory();
	const { store, actions } = useContext(Context);
	const [alerta, setAlerta] = useState("");

	useEffect(() => {
		actions.obtenerOferta(params.id);
	}, []);

	const guardar = () => {
		setAlerta("");
		actions
			.editarOferta(params.id)
			.then(
				result =>
					typeof result === "object" && result !== null
						? history.push("/ofertas")
						: setAlerta("Hubo un fallo iterno, reintente mas tarde")
			)
			.catch(error => setAlerta("Error: ", error));
	};
	return (
		<>
			<div className="container-fluid py-5" id="oferta">
				{alerta != "" ? (
					<div className="alert alert-danger" role="alert">
						{alerta}
					</div>
				) : (
					""
				)}
				<div className="container">
					<div className="row">
						<div className="col-8">
							<h1 id="titulo">
								<input
									type="text"
									onChange={e => actions.setOferta({ nombre: e.target.value })}
									value={store.oferta.nombre}
									className="form-control"
									id="nombreOferta"
								/>
							</h1>
							<h2 className="text-white" id="subtitulo">
								<select
									onChange={e => setOferta({ presencialidad: e.target.value })}
									value={store.oferta.presencialidad}
									id="presencialidad"
									className="form-control">
									<option>Remoto</option>
									<option>Presencial</option>
								</select>
							</h2>
							<h2 className="text-white" id="subtitulo" />
						</div>
						<div className="col-4 div-derecha">
							<h3 className="ml-5" id="empresa">
								<input
									id="fecha"
									type="date"
									className="form-control my-4"
									placeholder="Fecha"
									onChange={e => actions.setOferta({ fecha: e.target.value })}
									value={store.oferta.fecha}
									required
								/>
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-3">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div classaName="my-2">
							<h2>Descripción</h2>
							<textarea
								onChange={e => actions.setOferta({ descripcion: e.target.value })}
								className="form-control"
								id="descripcion"
								value={store.oferta.descripcion}
								rows="6"
								placeholder="Descripcion"
								required
							/>
						</div>

						<div className="my-2">
							<h2>Responsabilidades</h2>

							<ul>
								{store.oferta.responsabilidades.map((responsabilidad, i) => {
									return (
										<RequisitosOferta
											key={i}
											index={i}
											descripcion={responsabilidad}
											tipo={"responsabilidades"}
										/>
									);
								})}
							</ul>
							<AgregarDetallesOferta tipo={"responsabilidades"} />
						</div>

						<div className="my-1">
							<h2>Cualificaciones</h2>

							<ul>
								{store.oferta.cualificaciones.map((cualificacion, i) => {
									return (
										<RequisitosOferta
											key={i}
											index={i}
											descripcion={cualificacion}
											tipo={"cualificaciones"}
										/>
									);
								})}
							</ul>
							<AgregarDetallesOferta tipo={"cualificaciones"} />
						</div>

						<div className="my-1">
							<h2>Habilidades requeridas</h2>

							<ul>
								{store.oferta.habilidades.map((habilidad, i) => {
									return (
										<RequisitosOferta
											key={i}
											index={i}
											descripcion={habilidad}
											tipo={"habilidades"}
										/>
									);
								})}
							</ul>
							<AgregarDetallesOferta tipo={"habilidades"} />
						</div>

						<div className="mb-3 my-1">
							<h2>Condiciones</h2>

							<ul>
								{store.oferta.condiciones.map((condicion, i) => {
									return (
										<RequisitosOferta
											key={i}
											index={i}
											descripcion={condicion}
											tipo={"condiciones"}
										/>
									);
								})}
							</ul>
							<AgregarDetallesOferta tipo={"condiciones"} />
						</div>
					</div>
				</div>
				<div className="row justify-content-end">
					<button className="boton btn  m-3" onClick={guardar}>
						Guardar
					</button>
				</div>
			</div>
		</>
	);
};
