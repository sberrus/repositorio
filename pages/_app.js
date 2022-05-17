//Global Styles
import "../styles/css/global.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

//Modal Context
import { AppWrapper } from "../context/modalContext";

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	);
}

export default MyApp;
