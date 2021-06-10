import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomePage } from "./views/homepage";
import { Login } from "./views/login";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { CambiarContraseña } from "./views/cambiarContrasenna";
import { RecuperarContraseña } from "./views/recuperarContraseña";
import { CambiarPass } from "./views/cambiarPass";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { RegistrarEmpresa } from "./views/registrarEmpresa";
import { RegistroProfesional } from "./views/registroProfesional";
import { PerfilProfesional } from "./views/perfilProfesional";
import { EditarEmpresa } from "./views/editarEmpresa";
import { Empresa } from "./views/empresa";
import { CrearOferta } from "./views/crearOferta";
import { Oferta } from "./views/oferta";
import { VerOfertas } from "./views/verOfertas";
import { Buscador } from "./views/buscador";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/cambiarcontrasenna">
							<CambiarContraseña />
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
						<Route exact path="/registro-empresa">
							<RegistrarEmpresa />
						</Route>
						<Route exact path="/registro-profesional">
							<RegistroProfesional />
						</Route>
						<Route exact path="/perfil-profesional">
							<PerfilProfesional />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/oferta">
							<Oferta />
						</Route>
						<Route exact path="/buscar/:consulta">
							<Buscador />
						</Route>
						<Route exact path="/recuperarContraseña">
							<RecuperarContraseña />
						</Route>
						<Route exact path="/cambiarPass/">
							<CambiarPass />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
