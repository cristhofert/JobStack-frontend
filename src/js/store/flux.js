const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			educacion: [],
			experiencia: [],
			certificaciones: [],
			idiomas: []
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			borrarDetalle: (id, tipo) => {
				const store = getStore();
				const detalleNuevo = [...store[tipo]];
				detalleNuevo.splice(id, 1);
				setStore({ [tipo]: detalleNuevo });
			},
			agregarDetalle: (descripcion, tipo) => {
				const store = getStore();
				const nuevoArrayDetalles = [...store[tipo], descripcion];
				setStore({ [tipo]: nuevoArrayDetalles });
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
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
