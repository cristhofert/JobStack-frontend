import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Oferta } from "../component/oferta";

export const VerOfertas = () => {
	const { store, actions } = useContext(Context);
	let ofertas = store.empresa.ofertas;
	useEffect(() => {
		actions.cargarOfertas();
		ofertas = store.empresa.ofertas;
	}, []);
	return (
		<div className="container">
			<h1>Ofertas</h1>
			<button className="boton btn">Crear nueva oferta</button>
			<div className="listOfertas">
				{store.empresa.ofertas[0] ? (
					ofertas.map(oferta => {
						return <Oferta key={oferta.id} oferta={oferta} />;
					})
				) : (
					<h1>Cargando...</h1>
				)}
			</div>
		</div>
	);
};
