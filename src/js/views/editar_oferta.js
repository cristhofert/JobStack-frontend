import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { AgregarDetallesOferta } from "../component/agregarDetallesOferta";
export const EditarOferta = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerOferta(params.id);
	}, []);

	return (
		<>
			<div className="container-fluid py-5" id="oferta">
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
									<option selected>Elegir...</option>
									<option>Remoto</option>
									<option>Presencial</option>
								</select>
							</h2>
							<h2 className="text-white" id="subtitulo" />
							<button type="submit" className="botonPostular btn mt-3">
								Postularse
							</button>
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
						<h2>Responsabilidades</h2>
						<p>
							<ul>
								{store.oferta.responsabilidades.map((responsabilidad, i) => {
									return <li key={i}>{responsabilidad.nombre}</li>;
								})}
							</ul>
							<AgregarDetallesOferta tipo={"responsabilidades"} />
						</p>
						<h2>Cualificaciones</h2>
						<p>
							<ul>
								{store.oferta.cualificaciones.map((cualificacion, i) => {
									return <li key={i}>{cualificacion.nombre}</li>;
								})}
							</ul>
						</p>
						<h2>Habilidades requeridas</h2>
						<p>
							<ul>
								{store.oferta.habilidades.map((habilidad, i) => {
									return <li key={i}>{habilidad.nombre}</li>;
								})}
							</ul>
						</p>
						<h2>Condiciones</h2>
						<p>
							<ul>
								{store.oferta.condiciones.map((condicion, i) => {
									return <li key={i}>{condicion.nombre}</li>;
								})}
							</ul>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
