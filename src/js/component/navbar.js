import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/Logo_nuevo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [link, setLink] = useState();

	useEffect(
		() => {
			let tipoUsuario = sessionStorage.getItem("tipo-usuario");
			if (tipoUsuario === "profesional") {
				setLink("/perfil-profesional");
			} else if (tipoUsuario === "empresa") {
				setLink("/empresa");
			} else {
				setLink("/logout");
			}
		},
		[store.tipoDeUsuario]
		//[] se ejecuta 1 vez cuando monta el componente
		//[nombredependencia] se ejecuta 1 vez cuando monta el componente y cuando cambia la dependencia
		// se ejecuta todo el tiempo "cuando haya un cambio de renderizado en el componente"
	);
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
						{link == "/empresa" ? (
							<li className="nav-item">
								<Link className="navbarLink nav-link text-light" to="/ofertas">
									Ofertas
								</Link>
							</li>
						) : null}
						{sessionStorage.getItem("token") ? (
							<>
								<li className="nav-item">
									<Link className="navbarLink nav-link text-light" to={link ? link : "/"}>
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
