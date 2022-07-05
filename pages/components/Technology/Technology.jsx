//Components
import { Card, Col, Container, Row } from "react-bootstrap";
import OffcanvasComponent from "./components/OffcanvasComponent";
//data
import frontendAssets from "../../../models/technologies";
//Sass Styles
import style from "./Technology.module.scss";

const Technology = () => {
	return (
		<>
			<section className={style.technologiesSection}>
				{/* Technology card Holder */}
				<div className={style.cardContainer}>
					<Container>
						{/* Sección desarrollo web */}
						<section>
							<h2 className={`${style.cardSectionTitle} mx-auto`}>Proyectos</h2>
							<Container fluid>
								<Row>
									<Col sm={12} md={6}>
										{/* technology card */}
										<Card className={`${style.tecnologiesCard}`}>
											<OffcanvasComponent assets={frontendAssets} offcanvasContent="¿Cómo se centra un div?">
												Proyectos de FrontEnd
											</OffcanvasComponent>
											<div className={style.cardBG}>
												<img
													src="assets/img/printedChip.svg"
													alt="printed circuit background image"
													className={style.frontendCardBG}
												/>
											</div>
										</Card>
									</Col>
									<Col sm={12} md={6}>
										{/* technology card */}
										<Card className={`${style.tecnologiesCard}`}>
											<OffcanvasComponent assets={frontendAssets} offcanvasContent="¿Cómo se centra un div?">
												Proyectos de Backend
											</OffcanvasComponent>
											<div className={style.cardBG}>
												<img
													src="assets/img/diagram.svg"
													alt="printed circuit background image"
													className={style.backendCardBG}
												/>
											</div>
										</Card>
									</Col>
								</Row>
							</Container>
						</section>
					</Container>
				</div>
			</section>
		</>
	);
};

export default Technology;
