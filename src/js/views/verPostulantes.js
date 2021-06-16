import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Postulante } from "../component/postulante";

export const VerPostulantes = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.obtenerOferta(params.idOferta);
	}, []);
	return (
		<div>
			<h1 className="text-center my-2">{store.oferta.nombre}</h1>
			<h2 className="text-center">Postulantes</h2>
			<div className="container">
				<div className="listaOfertas m-3 shadow">
					{store.oferta.aplicantes[0] ? (
						store.oferta.aplicantes.map(postulante => {
							return <Postulante key={postulante.id} postulante={postulante} />;
						})
					) : (
						<h1 className="text-center p-3">Cargando...</h1>
					)}
				</div>
			</div>
		</div>
	);
};
