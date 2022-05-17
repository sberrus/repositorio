import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
	const [show, setShow] = useState(false);

	let modalState = {
		show,
		toggleModal() {
			!show && alert("Hay que añadir el modal de captcha para evitar problemas con el spam");
			setShow(!show);
		},
	};

	return <AppContext.Provider value={modalState}>{children}</AppContext.Provider>;
}

export function useModalContext() {
	return useContext(AppContext);
}
