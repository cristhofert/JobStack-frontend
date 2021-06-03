import React from "react";

export const ProyectoProfesional = () => {
	return (
		<div className="row m-2 p-2 rounded border">
			<div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
				<div className="fotoProyecto m-2" />
			</div>
			<div className="col-sm-12 col-md-7">
				<h2>Nombre Proyecto</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.
				</p>
			</div>
			<div className="col-sm-12 col-md-1 d-flex justify-content-center align-items-center">
				<i className="mx-2 fab fa-2x fa-github" />
			</div>
		</div>
	);
};
