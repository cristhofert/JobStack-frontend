import React, { useState } from "react";
import "../../styles/home.scss";
import DevImg from "../../img/DeveloperImage.png";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
	let historial = useHistory();
	const [buscador, setBuscador] = useState("");
	const buscar = () => {
		historial.push(`/buscar/${buscador}`);
	};
	return (
		<div className="coso container my-auto">
			<div className="row justify-content-center text-center">
				<div className="col-sm-12 col-md-8">
					<h1 className="headerHome">Buscar empleo</h1>
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
		</div>
	);
};
