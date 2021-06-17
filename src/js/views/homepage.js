import React, { useState } from "react";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";
import trabajando from "../../img/trabajando.jpeg";

export const HomePage = () => {
	let historial = useHistory();
	const [buscador, setBuscador] = useState("");
	const buscar = () => {
		historial.push(`/buscar/${buscador}`);
	};
	return (
		<div className="container-fluid" id="homepage">
			<div className="container">
				<div className="row justify-content-center text-center" id="margenHome">
					<div className="col-sm-12 col-md-8">
						<h1 className="headerHome" id="headerHome">
							Buscar empleo
						</h1>
						<form onSubmit={buscar}>
							<div className="form-row mx-2">
								<div className="col-sm-12 col-md-10">
									<label className="sr-only" htmlFor="buscador">
										Buscar
									</label>
									<input
										onChange={e => {
											e.target.value.trim() != "" ? setBuscador(e.target.value) : setBuscador("");
										}}
										value={buscador}
										className="form-control my-2 inputRegistro"
										type="text"
										id="buscador"
										name="buscador"
									/>
								</div>
								<div className="col-sm-12 col-md-2">
									<button className="boton btn my-2" type="submit">
										Buscar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid text-white text-center">
					<div className="container">
						<p className="lead">
							Bienvenido a WorkConf, aquí puedes encontrar tu empleo indicado dentro del área del
							desarrollo.
						</p>
						<p className="lead">Si eres una empresa, puedes publicar tus propias ofertas de trabajo.</p>
					</div>
				</div>
			</div>
			<div className="container-fluid mb-5 mt-3">
				<h1 className="text-center" id="t1">
					Comienza a postularte
				</h1>
				<h3 className="text-center mt-3 mb-3 text-white">¿Cómo hacerlo?</h3>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="card card_red text-center">
								<div className="title">
									<h2>Paso 1</h2>
									<div className="price">
										<h4>Crea una cuenta</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="card card_red text-center">
								<div className="title">
									<h2>Paso 2</h2>
									<div className="price">
										<h4>Inicia sesión y completa tu perfil</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="card card_red text-center">
								<div className="title">
									<h2>Paso 3</h2>
									<div className="price">
										<h4>Busca empleos y postúlate</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
