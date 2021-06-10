import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="nav-footer-color py-3 navbar navbar-expand-sm navbar-light">
			<div className="container">
				<Link to="/">
					<div className="rounded bg-dark text-center">
						<span className="navbar-brand m-0 mx-3 h1 text-light">JobStack</span>
					</div>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						{sessionStorage.getItem("token") ? (
							"login"
						) : (
							<>
								<li className="nav-item">
									<a className="nav-link text-light disabled">Calificar</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-light disabled">Nosotros</a>
								</li>
								<li className="nav-item">
									<Link className="navbarLink nav-link text-light" to="/login">
										Iniciar Sesión
									</Link>
								</li>
								<li className="nav-item dropdown">
									<a
										className="navbarLink nav-link dropdown-toggle text-light"
										id="navbarDropdown"
										role="button"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Registrarse
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<Link className="navbarLink text-dark dropdown-item" to="/registro-profesional">
											Profesional
										</Link>
										<div className="dropdown-divider" />
										<Link className="navbarLink text-dark dropdown-item" to="/registro-empresa">
											Empresa
										</Link>
									</div>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
