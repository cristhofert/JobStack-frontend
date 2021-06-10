const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			habilidades: [],
			condiciones: [],
			responsabilidades: [],
			cualificaciones: [],
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

			user: ""
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
					setStore({ email: data.user.email });
				}

				return res.ok;
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

				fetch(`${process.env.API_REST}/empresa`, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
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
			crearOferta: async (nombre, fecha, descripcion, presencialidad, estado) => {
				const store = getStore();
				let url = `${process.env.API_REST}/oferta`;

				let bodyObjeto = {
					nombre: nombre,
					fecha: fecha,
					descripcion: descripcion,
					presencialidad: presencialidad,
					estado: estado,
					cualificaciones: store.cualificaciones,
					condiciones: store.condiciones,
					habilidades: store.habilidades,
					responsabilidades: store.responsabilidades
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

				fetch(`${API_REST}/empresa`, requestOptions)
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
			registrarProfesional: (email, contrasenna) => {
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

				return fetch(`${process.env.API_REST}/registoprofesional`, requestOptions)
					.then(response => response.json())
					.then(result => {
						return result;
					})
					.catch(error => {
						return error.message;
					});
			}
		}
	};
};

export default getState;
