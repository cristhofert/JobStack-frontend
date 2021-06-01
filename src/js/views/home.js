import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<a className="btn btn-primary" href="#" role="button">
			Desarrollo web
		</a>
		<button className="btn btn-primary btn btn-space" type="submit">
			Ciencias de la computacion
		</button>
		<input className="btn btn-primary" type="button" value="Ingenieria de Software" />
		<input className="btn btn-primary" type="submit" value="Fronted" />
		<br />
		<input className="btn btn-primary" type="reset" value="Full-Stack" />
		<input className="btn btn-primary" type="reset" value="Diseño Grafico" />
		<input className="btn btn-primary" type="submit" value="Backend" />
		<input className="btn btn-primary" type="submit" value="Marketing Digital" />

		<h1>Destacados</h1>
		<div className="card mb-3" style={{ maxWidth: "540px" }}>
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src="..." alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
