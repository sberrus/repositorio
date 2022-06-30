import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
	const [show, setShow] = useState(false);
	const [showToast, setShowToast] = useState(false);

	let modalState = {
		show,
		toggleModal() {
			setShow(!show);
		},
		showToast,
		toggleToast() {
			setShowToast(!showToast);
		},
	};

	return <AppContext.Provider value={modalState}>{children}</AppContext.Provider>;
}

export function useModalContext() {
	return useContext(AppContext);
}
