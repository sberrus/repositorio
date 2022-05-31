//Nextjs
import Head from "next/head";
//Components
import MainMenu from "../components/MainMenu/MainMenu";
//Sections
import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import HeaderDisplay from "../components/LandingPage/HeaderDisplay";
import Technology from "../components/LandingPage/Technology";
//Styles Sass
import styled from "../styles/css/landing.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Samdev Portafolio Website" />
				<link rel="icon" href="/samdevLogo.svg" />
			</Head>
			<header className={styled.menuContainer}>
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
