/* eslint-disable @next/next/no-img-element */
//React-Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

//Styles Sass
import styled from "../../styles/css/mainmenu.module.css";

//modal Context
import { useModalContext } from "../../context/modalContext";

const MainMenu = () => {
	const modalContext = useModalContext();

	return (
		<div className={styled.menuContainer}>
			<Navbar bg="dark" variant="dark" expand="md" id="mainmenu" collapseOnSelect>
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt="brand Logo"
							src="/assets/img/PersonalLogo.svg"
							className={`${"d-inline-block align-top"} ${styled.headerLogo}`}
						/>{" "}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto text-center w-100 d-flex justify-content-center">
							<Nav.Link className={styled.navLink} href="#headerDisplay">
								Home
							</Nav.Link>
							<Nav.Link className={styled.navLink} href="#about">
								About
							</Nav.Link>
							<Nav.Link className={styled.navLink} href="#projects">
								Projects
							</Nav.Link>

							<Nav.Link
								className={styled.navLink}
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
