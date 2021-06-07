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
                let url = `${process.env.API_REST}/login`;
                let options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: `{"email":"${email}","contrasenna":"${password}"}`
                };

                let result;
                fetch(url, options)
                    .then(res => {
                        result = res.ok;
                        return res.json();
                    })

                    .then(data => {
                        sessionStorage.setItem("token", data.token);
                        setStore({ email: data.user.email });
                    })
                    .catch(err => console.error("error:" + err));
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
            cambiarContrasenna: (contraseñaNueva, contraseñaVieja) => {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", sessionStorage.getItem("token"));
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    contrasennaVieja: contraseñaVieja,
                    contrasennaNueva: contraseñaNueva
                });
                var requestOptions = {
                    method: 'PUT',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(`${process.env.API_REST}/cambiarcontrasenna`, requestOptions)
                    .then(response => response.json())
                    .then(result => console.log(result))
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
