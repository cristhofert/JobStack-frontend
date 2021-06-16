import React from "react";

export const Nosotros = () => (
	<div className="fondo">
		<div className="container mt-5">
			<div className="row justify-content-start">
				<div className="col-7">
					<h2 className="text-light">¿Quiénes somos?</h2>
					<div className="divredondo shadow">
						<p>
							Somos 4 estudiantes uruguayos con la motivación de querer utilizar nuestras habilidades
							dentro del campo de la programación de una manera que sea beneficiosa para las personas.
						</p>
					</div>
				</div>
			</div>
			<div className="row justify-content-end mt-5">
				<div className="col-7">
					<h2 className="text-light">¿Cuáles son nuestros objetivos?</h2>
					<div className="divredondo shadow">
						<p>
							Este proyecto tiene el propósito de poder brindar ayuda práctica en la búsqueda laboral
							hacia desarrolladores que se desempeñen en diversas áreas, de una manera fácil, rápida y
							eficiente.
						</p>
					</div>
				</div>
			</div>
			<h2 className="text-center mt-5 text-light">Nuestro equipo</h2>
			<div className="row justify-content-center mt-5">
				<div className="col-5">
					<div className="integrantes d-flex">
						<div className="mt-1">Martín Luaces</div>
						<div className="justify-content-end">
							<a
								href="https://github.com/martinluaces17"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-github" />
							</a>
							<a
								href="https://www.linkedin.com/in/martin-luaces-5a35ab191"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-linkedin-in" />
							</a>
						</div>
					</div>
				</div>
				<div className="col-5">
					<div className="integrantes d-flex">
						<div className="mt-1">Cristhofer Travieso</div>
						<div className="justify-content-end">
							<a
								href="https://github.com/cristhofert"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-github" />
							</a>
							<a
								href="https://www.linkedin.com/in/cristhofertravieso"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-linkedin-in" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center mt-3 mb-5">
				<div className="col-5">
					<div className="integrantes d-flex justify-content-between">
						<div className="mt-1">Leandro Matonte</div>
						<div className="justify-content-end">
							<a
								href="https://github.com/LeandroMatonte"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-github" />
							</a>
							<a
								href="https://www.linkedin.com/in/leandro-matonte-212496172/"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-linkedin-in" />
							</a>
						</div>
					</div>
				</div>
				<div className="col-5">
					<div className="integrantes d-flex justify-content-between">
						<div className="mt-1">Melanie Galaretto</div>
						<div className="justify-content-end">
							<a
								href="https://github.com/melagalaretto"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-github" />
							</a>
							<a
								href="https://www.linkedin.com/in/melanie-galaretto-4b8b83214/"
								className="btn"
								target="_blank"
								rel="noopener noreferrer">
								<i className="mx-2 fab fa-2x fa-linkedin-in" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
