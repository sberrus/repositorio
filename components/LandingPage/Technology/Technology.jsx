/* eslint-disable @next/next/no-img-element */
//Components
import { Card, Col, Container, Row } from "react-bootstrap";
import OffcanvasComponent from "../../OffcanvasComponent";
//Sass Styles
import styled from "../../../styles/css/pages/technology.module.css";

//data
import frontendAssets from "../../../models/technologies";

const Technology = () => {
	return (
		<>
			<section className={styled.technologiesSection}>
				{/* Technology card Holder */}
				<div className={styled.cardContainer}>
					<Container>
						{/* Sección desarrollo web */}
						<section>
							<h2 className={`${styled.cardSectionTitle} mx-auto`}>Proyectos</h2>
							<Container fluid>
								<Row>
									<Col sm={12} md={6}>
										{/* technology card */}
										<Card className={`${styled.tecnologiesCard}`}>
											<OffcanvasComponent assets={frontendAssets} offcanvasContent="¿Cómo se centra un div?">
												Proyectos de FrontEnd
											</OffcanvasComponent>
											<div className={styled.cardBG}>
												<img
													src="assets/img/printedChip.svg"
													alt="printed circuit background image"
													className={styled.frontendCardBG}
												/>
											</div>
										</Card>
									</Col>
									<Col sm={12} md={6}>
										{/* technology card */}
										<Card className={`${styled.tecnologiesCard}`}>
											<OffcanvasComponent assets={frontendAssets} offcanvasContent="¿Cómo se centra un div?">
												Proyectos de Backend
											</OffcanvasComponent>
											<div className={styled.cardBG}>
												<img
													src="assets/img/diagram.svg"
													alt="printed circuit background image"
													className={styled.backendCardBG}
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
