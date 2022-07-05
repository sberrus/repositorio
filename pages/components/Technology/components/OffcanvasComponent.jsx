import React, { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";

// sass
import styled from "./OffcanvasComponent.module.scss";
import {
	AxiosIcon,
	BootstrapIcon,
	ChartJsIcon,
	CssIcon,
	HtmlIcon,
	JsIcon,
	ReactIcon,
	ReactRouterDomIcon,
} from "../../../../components/Icons/Icons";

const OffcanvasComponent = ({
	headerText = "Stack de Tecnologías",
	offcanvasContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, minima itaque quae nihil.....",
	assets = [],
	children,
}) => {
	// states
	const [show, setShow] = useState(false);

	// handlers
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className={styled.buttonHolder}>
				<Button variant="outline-success" onClick={handleShow} className={styled.showButton}>
					{children}
				</Button>
			</div>

			<Offcanvas
				show={show}
				onHide={handleClose}
				placement="top"
				style={{ height: "100%", margin: "auto" }}
				className="bg-dark text-light"
			>
				<Offcanvas.Header closeButton closeVariant="white">
					<Offcanvas.Title>{headerText}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{offcanvasContent}
					<hr />
					<Row>
						{/* Technologies grid */}
						{assets.map((tech, idx) => (
							<Col lg={4} md={6} xs={12} className={`${styled.card} mb-3`} key={idx}>
								{/* Tehcnologie Card */}

								{/* Body holder */}
								<div className={styled.cardBody}>
									{tech?.highlight && (
										<>
											{/* comment heiglight */}
											<span className={`${styled.comment}`}>
												Proyecto destacado <br />
											</span>
										</>
									)}
									<p>{tech.title}</p>
									<p>{tech.description}</p>

									<div className={styled.techIconContainer}>
										<div className={styled.iconContainer}>
											<HtmlIcon />
										</div>
										<div className={styled.iconContainer}>
											<CssIcon />
										</div>

										<div className={styled.iconContainer}>
											<JsIcon />
										</div>
										<div className={styled.iconContainer}>
											<ReactIcon />
										</div>
										<div className={styled.iconContainer}>
											<BootstrapIcon />
										</div>
										<div className={styled.iconContainer}>
											<ChartJsIcon />
										</div>
										<div className={styled.iconContainer}>
											<ReactRouterDomIcon />
										</div>
										<div className={styled.iconContainer}>
											<AxiosIcon />
										</div>
									</div>

									{/* Links Holder */}
									<div className={styled.linkHolder}>
										{tech.links?.webpage && (
											<a
												href={tech.links.webpage}
												className={`${styled.link}`}
												target="_BLANK"
												rel="noreferrer"
											>
												<i className="bi bi-globe2"></i> webpage
											</a>
										)}
										{tech.links?.github && (
											<a
												href={tech.links.github}
												className={`${styled.link}`}
												target="_BLANK"
												rel="noreferrer"
											>
												<i className="bi bi-github"></i> github
											</a>
										)}
									</div>
								</div>
							</Col>
						))}
					</Row>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default OffcanvasComponent;
