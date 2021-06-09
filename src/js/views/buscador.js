import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { OfertaParaPostular } from "../component/oferta_para_postular";

export const Buscador = () => {
	const params = useParams();
	const [consulta, setConsulta] = useState(params.consulta);
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.buscar(consulta);
	}, []);

	const buscar = e => {
		e.preventDefault();
		actions.buscar(consulta);
	};
	return (
		<div className="container">
			<div className="d-flex flex-row justify-content-center my-5">
				<form className="form-inline" onSubmit={buscar}>
					<div className="form-group mx-sm-3 mb-2">
						<input
							type="text"
							className="form-control"
							id="consulta"
							placeholder="Buscar"
							vlaue={consulta}
							onChange={e => setConsulta(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary mb-2">
						<i className="fas fa-search" />
					</button>
				</form>
			</div>
			<div className="text-center my-5">
				<h1 className="my-3">Resultado</h1>
			</div>
			<div className="listaOfertas mt-3 shadow">
				{Array.isArray(store.resultados) ? (
					store.resultados.map(oferta => {
						return <OfertaParaPostular key={oferta.id} oferta={oferta} />;
					})
				) : (
					<p>Cargando...</p>
				)}
			</div>
		</div>
	);
};
