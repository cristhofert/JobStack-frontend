import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Oferta } from "../component/oferta";
import { Link } from "react-router-dom";

export const VerOfertas = () => {
	const { store, actions } = useContext(Context);
	const [mensaje, setMensaje] = useState("Cargando");
	let ofertas = store.user.ofertas;
	useEffect(() => {
		ofertas = store.user.ofertas;
		if (ofertas.length == 0) {
			setMensaje("Aún no se ha creado ninguna oferta");
		}
	}, []);
	return (
		<div className="container">
			<div className="text-center my-5">
				<h1 className="my-3">Ofertas</h1>
				<Link className="boton btn" to="/crear-oferta">
					Crear nueva oferta
				</Link>
			</div>
			<div className="listaOfertas m-3 shadow">
				{store.user.ofertas[0] ? (
					ofertas.map(oferta => {
						return <Oferta key={oferta.id} oferta={oferta} />;
					})
				) : (
					<h1 className="text-center p-3">{mensaje}</h1>
				)}
			</div>
		</div>
	);
};
