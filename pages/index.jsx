//Nextjs
import Head from "next/head";
//Components
import MainMenu from "../components/MainMenu/MainMenu";
//Sections
import About from "./components/About";
import Contact from "./components/Contact";
import HeaderDisplay from "./components/HeaderDisplay";
import Technology from "./components/Technology";
//Styles Sass
import styles from "./components/Landing.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>Samdev</title>
				<meta name="description" content="Samdev Portafolio Website" />
				<link rel="icon" href="/samdevLogo.svg" />
			</Head>
			<header className={styles.menuContainer}>
				<MainMenu />
			</header>
			<main className="bg-dark text-light">
				<HeaderDisplay />
				<About />
				<div className="mb-5" id="projects"></div>
				<Technology />
				<Contact />
			</main>
		</>
	);
}
