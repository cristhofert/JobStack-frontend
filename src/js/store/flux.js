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
			}
		}
	};
};

export default getState;
