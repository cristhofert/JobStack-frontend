import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/Logo_nuevo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	let mi_perfil =
		store.tipoDeUsuario == "profesional"
			? "/perfil-profesional"
			: store.tipoDeUsuario == "empresa"
				? "/empresa"
				: "/logout";

	return (
		<nav className="nav-footer-color py-3 navbar navbar-expand-sm navbar-light">
			<div className="container">
				<Link to="/">
					<div className="rounded text-center">
						{/* <span className="navbar-brand m-0 mx-3 h1 text-light">JobStack</span> */}
						<img src={logo} width="100" />
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
						<li className="nav-item">
							<a className="nav-link text-light disabled">Calificar</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light disabled">Nosotros</a>
						</li>
						{mi_perfil == "/empresa" ? (
							<li className="nav-item">
								<Link className="navbarLink nav-link text-light" to="/ofertas">
									Ofertas
								</Link>
							</li>
						) : (
							""
						)}
						{sessionStorage.getItem("token") ? (
							<>
								<li className="nav-item">
									<Link className="navbarLink nav-link text-light" to={mi_perfil}>
										Mi Perfil
									</Link>
								</li>
								<li className="nav-item">
									<Link className="navbarLink nav-link text-light" to="/logout">
										Cerrar Sesión
									</Link>
								</li>
							</>
						) : (
							<>
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
