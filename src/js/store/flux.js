const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			educacion: [],
			experiencia: [],
			certificaciones: [],
			idiomas: [],
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
				nombre: ""
			},

			user: ""
		},
		actions: {
			setEmpresa: empresa => {
				const store = getStore();
				setStore({ empresa: { ...store.empresa, ...empresa } });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			login: async (email, password) => {
				let url = `https://3001-azure-catfish-1gg3x9hu.ws-us08.gitpod.io/login`;
				let options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: `{"email":"${email}","contrasenna":"${password}"}`
				};

				let user;
				let result;
				await fetch(url, options)
					.then(res => {
						result = res.ok;
						return res.json();
					})
					.then(data => (user = data))
					.catch(err => console.error("error:" + err));
				sessionStorage.setItem("token", user.token);
				setStore({ email: user.user.email });
				return result;
			},
			borrarDetalle: (id, tipo) => {
				const store = getStore();
				const detalleNuevo = [...store[tipo]];
				detalleNuevo.splice(id, 1);
				setStore({ [tipo]: detalleNuevo });
			},
			agregarDetalle: (descripcion, tipo) => {
				if (descripcion.length > 0) {
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
			}
		}
	};
};

export default getState;
