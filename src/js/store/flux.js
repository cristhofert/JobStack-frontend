const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			oferta: {
				id: 0,
				nombre: "",
				descripcion: "",
				fecha: "",
				presencialidad: "remoto",
				estado: "activo",
				habilidades: [],
				condiciones: [],
				responsabilidades: [],
				cualificaciones: [],
				aplicantes: []
			},
			profesional: {
				descripcion: "",
				estudios: [],
				experiencias: [],
				certificaciones: [],
				idiomas: [],
				apellido: "",
				facebook: "",
				github: "",
				id: 0,
				linkedin: "",
				nombre: "",
				twitter: "",
				postulaciones: []
			},
			empresa: {
				email: "",
				descripcion: "",
				comentarios: "",
				sitioweb: "",
				departamento: "",
				direccion: "",
				direccion: "",
				github: "",
				linkedin: "",
				twitter: "",
				facebook: "",
				id: 0,
				nombre: "",
				ofertas: []
			},
			user: {},
			tipoDeUsuario: "",
			resultados: [{ id: "1", fecha: "fecha", nombre: `nombre` }, { id: "2", fecha: "fecha", nombre: `nombre` }],
			repos: [{ name: "Cargando...", description: "Cargando...", html_url: "" }]
		},
		actions: {
			setEmpresa: empresa => {
				const store = getStore();
				setStore({ empresa: { ...store.empresa, ...empresa } });
			},
			setProfesional: profesional => {
				const store = getStore();
				setStore({ profesional: { ...store.profesional, ...profesional } });
			},
			setOferta: oferta => {
				const store = getStore();
				setStore({ oferta: { ...store.oferta, ...oferta } });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			login: async (email, password) => {
				const actions = getActions();
				let url = `${process.env.API_REST}/login`;
				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: `{"email":"${email}","contrasenna":"${password}"}`
				};
				const res = await fetch(url, options);
				if (!res.ok) {
					const message = `An error has occured: ${res.status}`;
					console.log(message);
				} else {
					const data = await res.json();
					sessionStorage.setItem("token", data.token);
					setStore({ user: data.user });
					if (data.user.comentarios) {
						setStore({ tipoDeUsuario: "empresa" });
						sessionStorage.setItem("tipo-usuario", "empresa");
					} else {
						setStore({ tipoDeUsuario: "profesional" });
						sessionStorage.setItem("tipo-usuario", "profesional");
					}
				}
				return res.ok;
			},

			loginGoogle: async email => {
				let url = `${process.env.API_REST}/loginGoogle`;
				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: `{"email":"${email}"}`
				};
				const res = await fetch(url, options);
				if (!res.ok) {
					const message = `An error has occured: ${res.status}`;
					console.log(message);
				} else {
					const data = await res.json();
					sessionStorage.setItem("token", data.token);
					setStore({ user: data.user });
					if (data.user.comentarios) setStore({ tipoDeUsuario: "empresa" });
					else setStore({ tipoDeUsuario: "profesional" });
				}

				return res.ok;
			},

			logout: () => {
				setStore({ user: {} });
				setStore({ tipoDeUsuario: "" });
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("tipo-usuario");
			},
			obtenerPostulaciones: async () => {
				const store = getStore();
				let options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					}
				};
				const res = await fetch(`${process.env.API_REST}/perfil-profesional/postulaciones`, options);
				const data = await res.json();
				setStore({ profesional: { ...store.profesional, postulaciones: data } });
				return data;
			},

			borrarDetalle: (id, tipo) => {
				const store = getStore();
				const detalleNuevo = [...store.profesional[tipo]];
				detalleNuevo.splice(id, 1);
				setStore({ profesional: { ...store.profesional, [tipo]: detalleNuevo } });
			},
			borrarDetalleOferta: (id, tipo) => {
				const store = getStore();
				const detalleNuevo = [...store.oferta[tipo]];
				detalleNuevo.splice(id, 1);
				setStore({ oferta: { ...store.oferta, [tipo]: detalleNuevo } });
			},
			agregarDetalle: (descripcion, tipo) => {
				if (descripcion.nombre.length > 0) {
					const store = getStore();
					const nuevoArrayDetalles = [...store[tipo], descripcion];
					setStore({ [tipo]: nuevoArrayDetalles });
				}
			},
			registrarEmpresa: datosDeEmpresa => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(datosDeEmpresa);

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(`${process.env.API_REST}/empresa`, requestOptions)
					.then(response => response.json())
					.then(result => result);
			},
			obtenerEmpresa: id => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`${process.env.API_REST}/empresa/${id}`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ empresa: result }))
					.catch(error => console.log("error", error));
			},
			crearOferta: async () => {
				const store = getStore();
				let url = `${process.env.API_REST}/oferta`;

				let bodyObjeto = {
					nombre: store.oferta.nombre,
					fecha: store.oferta.fecha,
					descripcion: store.oferta.descripcion,
					presencialidad: store.oferta.presencialidad,
					estado: store.oferta.estado,
					cualificaciones: store.oferta.cualificaciones,
					condiciones: store.oferta.condiciones,
					habilidades: store.oferta.habilidades,
					responsabilidades: store.oferta.responsabilidades
				};

				let bodyJSON = JSON.stringify(bodyObjeto);
				let options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					},
					body: bodyJSON
				};

				const res = await fetch(url, options);
				return res.ok;
			},
			cargarOfertas: async () => {
				const store = getStore();
				let url = `${process.env.API_REST}/ofertas`;

				let options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					}
				};

				const res = await fetch(url, options);
				if (res.ok) {
					const data = await res.json();
					let nuevaEmpresa = { ...store.user, ofertas: data };
					setStore({ user: nuevaEmpresa });
				} else {
					console.log(res.status);
				}
			},
			cambiarContrasenna: (contrase??aNueva, contrase??aVieja) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", sessionStorage.getItem("token"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					contrasennaVieja: contrase??aVieja,
					contrasennaNueva: contrase??aNueva
				});
				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`${process.env.API_REST}/cambiarcontrasenna`, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			recuperarPass: async email => {
				const bodyJSON = JSON.stringify({
					email: email
				});
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					},
					body: bodyJSON
				};
				await fetch(`${process.env.API_REST}/recuperarPass`, options);
			},

			cambiarPassRecuperacion: async (token, password) => {
				const tokenRemplazado = token.replace(/\$/g, ".");
				const bodyJSON = JSON.stringify({
					nuevaPass: password
				});
				const options = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						Authorization: tokenRemplazado
					},
					body: bodyJSON
				};
				const res = await fetch(`${process.env.API_REST}/cambiarPassRecuperacion`, options);
				return res.ok;
			},

			obtenerMiEmpresa: () => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var requestOptions = {
					method: "GET",
					headers: myHeaders,

					redirect: "follow"
				};

				fetch(`${process.env.API_REST}/empresa/`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ empresa: result }))
					.catch(error => console.log("error", error));
			},
			cargarInfoDePerfil: async () => {
				const actions = getActions();
				if (sessionStorage.getItem("token")) {
					let options = {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: sessionStorage.getItem("token")
						}
					};

					const res = await fetch(`${process.env.API_REST}/perfil-profesional`, options);
					const data = await res.json();

					setStore({ profesional: data });

					actions.cargarRepos(data.github);
				}
			},
			cargarRepos: async github => {
				//obtener repos de github
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`https://api.github.com/users/${github}/repos`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ repos: result }))
					.catch(error => console.log("error", error));
			},

			cargarProfesional: async id => {
				const actions = getActions();
				let options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: sessionStorage.getItem("token")
					}
				};

				const res = await fetch(`${process.env.API_REST}/profesional/${id}`, options);
				const data = await res.json();
				setStore({ profesional: data });
				actions.cargarRepos(data.github);
			},
			editarEmpresa: () => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify(store.empresa);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(`${process.env.API_REST}/empresa`, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			editarOferta: id => {
				const store = getStore();
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				myHeaders.append("Authorization", sessionStorage.getItem("token"));

				var raw = JSON.stringify(store.oferta);

				var requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				return fetch(`${process.env.API_REST}/oferta/${id}`, requestOptions).then(response => response.json());
			},
			editarProfesional: async () => {
				const store = getStore();

				let bodyJSON = JSON.stringify(store.profesional);

				let options = {
					method: "PUT",
					headers: { "Content-Type": "application/json", Authorization: sessionStorage.getItem("token") },
					body: bodyJSON,
					redirect: "follow"
				};

				const res = await fetch(`${process.env.API_REST}/perfil-profesional`, options);
				const data = await res.json();
				console.log(data);
			},
			registrarProfesional: async (email, contrasenna) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email,
					contrasenna
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch(`${process.env.API_REST}/registroprofesional`, requestOptions);
					const result = await response.json();
					return result;
				} catch (error) {
					return error.message;
				}
			},
			buscar: consulta => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`${process.env.API_REST}/buscar/${consulta}`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ resultados: result }))
					.catch(error => console.log("error", error));
			},
			postularse: async idOferta => {
				let bodyJSON = JSON.stringify({ idOferta: idOferta });

				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json", Authorization: sessionStorage.getItem("token") },
					body: bodyJSON,
					redirect: "follow"
				};
				try {
					const response = await fetch(`${process.env.API_REST}/perfil-profesional/postulaciones`, options);
					const result = await response.json();
					return result;
				} catch (error) {
					return error.message;
				}
			},
			postulado: async idOferta => {
				const store = getStore();
				const actions = getActions();
				let i = 0;
				let encontre = false;
				await actions.obtenerPostulaciones();
				while (!encontre && i < store.profesional.postulaciones.length) {
					if (store.profesional.postulaciones[i].id == idOferta) {
						encontre = true;
					}
					i++;
				}
				return encontre;
			},
			borrarPostulacion: async idOferta => {
				let bodyJSON = JSON.stringify({ idOferta: idOferta });

				let options = {
					method: "PUT",
					headers: { "Content-Type": "application/json", Authorization: sessionStorage.getItem("token") },
					body: bodyJSON,
					redirect: "follow"
				};
				try {
					const response = await fetch(`${process.env.API_REST}/perfil-profesional/postulaciones`, options);
					const result = await response.json();
					return result;
				} catch (error) {
					return error.message;
				}
			},
			obtenerOferta: id => {
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`${process.env.API_REST}/oferta/${id}`, requestOptions)
					.then(response => response.json())
					.then(result => {
						setStore({ oferta: result });
					})
					.catch(error =>
						setStore({
							oferta: {
								id: 0,
								nombre: "No existe",
								fecha: "",
								descripcion: "",
								politica_teletrabajo: "",
								estado: "",
								cualificaciones: [],
								condiciones: [],
								habilidades: [],
								responsabilidades: []
							}
						})
					);
			}
		}
	};
};

export default getState;
