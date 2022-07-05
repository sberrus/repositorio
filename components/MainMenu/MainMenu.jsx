//React-Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

//Styles Sass
import style from "./MainMenu.module.scss";

//modal Context
import { useModalContext } from "../../context/modalContext";

const MainMenu = () => {
	const modalContext = useModalContext();

	return (
		<div className={style.menuContainer}>
			<Navbar bg="dark" variant="dark" expand="md" id="mainmenu" collapseOnSelect>
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt="brand Logo"
							src="/assets/img/PersonalLogo.svg"
							className={`${"d-inline-block align-top"} ${style.headerLogo}`}
						/>{" "}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto text-center w-100 d-flex justify-content-center">
							<Nav.Link className={style.navLink} href="#headerDisplay">
								Home
							</Nav.Link>
							<Nav.Link className={style.navLink} href="#about">
								About
							</Nav.Link>
							<Nav.Link className={style.navLink} href="#projects">
								Projects
							</Nav.Link>

							<Nav.Link
								className={style.navLink}
								href="#contact"
								onClick={() => {
									modalContext.toggleModal();
								}}
							>
								Contacto
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default MainMenu;
