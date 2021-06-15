import React from "react";

export const Nosotros = () => (
	<div className="container mt-5">
		<div className="row justify-content-start">
			<div className="col-7">
				<h2>¿Quiénes somos?</h2>
				<div className="divredondo">
					<p>
						Somos 4 estudiantes uruguayos con la motivación de querer utilizar nuestras habilidades dentro
						del campo de la programación de una manera que sea beneficiosa para las personas.
					</p>
				</div>
			</div>
		</div>
		<div className="row justify-content-end mt-5">
			<div className="col-7">
				<h2 className="text-right">¿Cuáles son nuestros objetivos?</h2>
				<div className="divredondo">
					<p>
						Este proyecto tiene el propósito de poder brindar ayuda práctica en la búsqueda laboral hacia
						desarrolladores que se desempeñen en diversas áreas, de una manera fácil, rápida y eficiente.
					</p>
				</div>
			</div>
		</div>
		<h2 className="text-center mt-5">Nuestro equipo</h2>
		<div className="row justify-content-center">
			<div className="col-5">
				<div className="integrantes d-flex justify-content-between">
					<div>Martín Luaces</div>
					<i className="mx-2 fab fa-2x fa-github" />
				</div>
			</div>
			<div className="col-5">
				<div className="integrantes d-flex justify-content-between">
					<div>Cristhofer Travieso</div>
					<i className="mx-2 fab fa-2x fa-github" />
				</div>
			</div>
		</div>
		<div className="row justify-content-center mt-3">
			<div className="col-5">
				<div className="integrantes d-flex justify-content-between">
					<div>Leandro Matonte</div>
					<i className="mx-2 fab fa-2x fa-github" />
				</div>
			</div>
			<div className="col-5">
				<div className="integrantes d-flex justify-content-between">
					<div>Melanie Galaretto</div>
					<i className="mx-2 fab fa-2x fa-github" />
				</div>
			</div>
		</div>
	</div>
);
