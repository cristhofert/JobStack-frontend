import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Logout = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		actions.logout();
		history.push("/");
	}, []);

	return <p>Saliendo...</p>;
};
