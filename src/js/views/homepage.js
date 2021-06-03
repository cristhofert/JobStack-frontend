import React from "react";
import "../../styles/home.scss";

export const HomePage = () => (
	<div className="text-center mt-5">
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Desarrollo Web" />
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Ciencias de la Computacion" />
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Ingenieria de Software" />
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Fronted" />
		<br />
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Full-Stack" />
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Diseño Grafico" />
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Backend" />
		<input className="btn btn-primary mr-2 mb-2" type="button" value="Marketing Digital" />

		<h1>Destacados</h1>
		<div className="container ">
			<div className="cartas mx-auto d-block">
				<div className="card mb-3 mx-auto border border-primary rounded-lg " style={{ maxWidth: "540px" }}>
					<div className="row no-gutters">
						<div className="col-md-4 mt-1">
							<img
								src="https://secure.gravatar.com/avatar/1cd30edf7c0caccee607be3524eee073?s=100&d=mm&r=g"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="text-left">Nombre puesto de trabajo</h5>
								<p className="text-left">
									Nombre empresa - Pais <a className="fecha">Fecha</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3 mx-auto border border-primary rounded-lg " style={{ maxWidth: "540px" }}>
					<div className="row no-gutters">
						<div className="col-md-4 mt-1">
							<img
								src="https://secure.gravatar.com/avatar/1cd30edf7c0caccee607be3524eee073?s=100&d=mm&r=g"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="text-left">Nombre puesto de trabajo</h5>
								<p className="text-left">
									Nombre empresa - Pais <a className="fecha">Fecha</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3 mx-auto border border-primary rounded-lg " style={{ maxWidth: "540px" }}>
					<div className="row no-gutters">
						<div className="col-md-4 mt-1">
							<img
								src="https://secure.gravatar.com/avatar/1cd30edf7c0caccee607be3524eee073?s=100&d=mm&r=g"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="text-left">Nombre puesto de trabajo</h5>
								<p className="text-left">
									Nombre empresa - Pais <a className="fecha">Fecha</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3 mx-auto border border-primary rounded-lg " style={{ maxWidth: "540px" }}>
					<div className="row no-gutters">
						<div className="col-md-4 mt-1">
							<img
								src="https://secure.gravatar.com/avatar/1cd30edf7c0caccee607be3524eee073?s=100&d=mm&r=g"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="text-left">Nombre puesto de trabajo</h5>
								<p className="text-left">
									Nombre empresa - Pais <a className="fecha">Fecha</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="card mb-3 mx-auto border border-primary rounded-lg " style={{ maxWidth: "540px" }}>
					<div className="row no-gutters">
						<div className="col-md-4 mt-1">
							<img
								src="https://secure.gravatar.com/avatar/1cd30edf7c0caccee607be3524eee073?s=100&d=mm&r=g"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="text-left">Nombre puesto de trabajo</h5>
								<p className="text-left">
									Nombre empresa - Pais <a className="fecha">Fecha</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
