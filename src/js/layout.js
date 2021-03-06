import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomePage } from "./views/homepage";
import { Login } from "./views/login";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { CambiarContrase├▒a } from "./views/cambiarContrasenna";
import { RecuperarContrase├▒a } from "./views/recuperarContrase├▒a";
import { CambiarPass } from "./views/cambiarPass";
import { Nosotros } from "./views/nosotros";
import { Calificar } from "./views/calificar";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RegistrarEmpresa } from "./views/registrarEmpresa";
import { RegistroProfesional } from "./views/registroProfesional";
import { PerfilProfesional } from "./views/perfilProfesional";
import { EditarEmpresa } from "./views/editarEmpresa";
import { Empresa } from "./views/empresa";
import { CrearOferta } from "./views/crearOferta";
import { Oferta } from "./views/oferta";
import { EditarOferta } from "./views/editar_oferta";
import { VerOfertas } from "./views/verOfertas";
import { Buscador } from "./views/buscador";
import { Logout } from "./views/logout";
import { CambiarPassRecuperacion } from "./views/cambiarPassRecuperacion";
import { VerPostulantes } from "./views/verPostulantes";
import { Profesional } from "./views/profesional";

import "../styles/home.scss";
import "../styles/index.scss";
//create your first component
const Layout = () => {
	const [modoOscuro, setModoOscuro] = useState(false);
	const ref = useRef(null);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	useEffect(
		() => {
			/* console.log("modo oscuro: ", modoOscuro);
            ref.current.className = `d-flex flex-column h-100 ${modoOscuro ? " modooscuro" : ""}"`; */
			console.log(modoOscuro);
			if (modoOscuro) {
				// here's a good place to add a dark-mode css classes to our <body> and remove light mode
				document.body.classList.add("modo-oscuro");
				document.body.classList.remove("modo-claro");
			} else {
				// remove the dark mode classes, add light mode
				document.body.classList.add("modo-claro");
				document.body.classList.remove("modo-oscuro");
			}
		},
		[modoOscuro]
	);

	return (
		<div className="d-flex flex-column h-100" ref={ref}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar setModoOscuro={setModoOscuro} modoOscuro={modoOscuro} />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/logout">
							<Logout />
						</Route>
						<Route exact path="/cambiarcontrasenna">
							<CambiarContrase├▒a />
						</Route>
						<Route exact path="/empresa/:id">
							<Empresa />
						</Route>
						<Route exact path="/empresa">
							<EditarEmpresa />
						</Route>
						<Route exact path="/crear-oferta">
							<CrearOferta />
						</Route>
						<Route exact path="/ofertas">
							<VerOfertas />
						</Route>
						<Route exact path="/postulantes/:idOferta">
							<VerPostulantes />
						</Route>
						<Route exact path="/registro-empresa">
							<RegistrarEmpresa />
						</Route>
						<Route exact path="/registro-profesional">
							<RegistroProfesional />
						</Route>
						<Route exact path="/perfil-profesional">
							<PerfilProfesional />
						</Route>
						<Route exact path="/profesional/:id">
							<Profesional />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/oferta/:id">
							<Oferta />
						</Route>
						<Route exact path="/oferta/:id/editar">
							<EditarOferta />
						</Route>
						<Route exact path="/buscar/:consulta">
							<Buscador />
						</Route>
						<Route exact path="/recuperarContrase├▒a">
							<RecuperarContrase├▒a />
						</Route>
						<Route exact path="/recuperarContrase├▒a/:token">
							<CambiarPassRecuperacion />
						</Route>
						<Route exact path="/cambiarPass/">
							<CambiarPass />
						</Route>
						<Route exact path="/nosotros">
							<Nosotros />
						</Route>
						<Route exact path="/calificar">
							<Calificar />
						</Route>
						<Route>
							<h1>Error HTTP 404 No Encontrado!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
