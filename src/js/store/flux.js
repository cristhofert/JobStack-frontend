const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			oferta: {
				nombre: "",
				descripcion: "",
				fecha: "",
				presencialidad: "remoto",
				estado: "activo",
				habilidades: [],
				condiciones: [],
				responsabilidades: [],
				cualificaciones: []
			},
			profesional: {
				descripcion: "",
				estudios: [],
				experiencias: [],
				certificaciones: [],
				idiomas: []
			},
			empresa: {
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
			resultados: [{ id: "1", fecha: "fecha", nombre: `nombre` }, { id: "2", fecha: "fecha", nombre: `nombre` }]
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
					if (data.user.comentarios) setStore({ tipoDeUsuario: "empresa" });
					else setStore({ tipoDeUsuario: "profesional" });
				}

				return res.ok;
			},
			logout: () => {
				setStore({ user: {} });
				setStore({ tipoDeUsuario: "" });
				sessionStorage.removeItem("token");
			},
			borrarDetalle: (id, tipo) => {
				const store = getStore();
				const detalleNuevo = [...store.profesional[tipo]];
				detalleNuevo.splice(id, 1);
				setStore({ profesional: { ...store.profesional, [tipo]: detalleNuevo } });
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
					let nuevaEmpresa = { ...store.empresa, ofertas: data };
					setStore({ empresa: nuevaEmpresa });
				} else {
					console.log(res.status);
				}
			},
			cambiarContrasenna: (contraseñaNueva, contraseñaVieja) => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", sessionStorage.getItem("token"));
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					contrasennaVieja: contraseñaVieja,
					contrasennaNueva: contraseñaNueva
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
				}
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
			}
		}
	};
};

export default getState;
