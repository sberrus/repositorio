import React, { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";

// sass
import style from "./OffcanvasComponent.module.scss";
import utilsStyles from "../../../../styles/sass/utils.module.scss";
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
			<div className={style.buttonHolder}>
				<Button variant="outline-success" onClick={handleShow} className={style.showButton}>
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
							<Col lg={4} md={6} xs={12} className={`${style.card} mb-3`} key={idx}>
								{/* Tehcnologie Card */}

								{/* Body holder */}
								<div className={style.cardBody}>
									{tech?.highlight && (
										<>
											{/* comment heiglight */}
											<span className={`${style.comment} ${utilsStyles.blink}`}>
												Proyecto destacado <br />
											</span>
										</>
									)}
									<p>{tech.title}</p>
									<p>{tech.description}</p>

									<div className={style.techIconContainer}>
										<div className={style.iconContainer}>
											<HtmlIcon />
										</div>
										<div className={style.iconContainer}>
											<CssIcon />
										</div>

										<div className={style.iconContainer}>
											<JsIcon />
										</div>
										<div className={style.iconContainer}>
											<ReactIcon />
										</div>
										<div className={style.iconContainer}>
											<BootstrapIcon />
										</div>
										<div className={style.iconContainer}>
											<ChartJsIcon />
										</div>
										<div className={style.iconContainer}>
											<ReactRouterDomIcon />
										</div>
										<div className={style.iconContainer}>
											<AxiosIcon />
										</div>
									</div>

									{/* Links Holder */}
									<div className={style.linkHolder}>
										{tech.links?.webpage && (
											<a
												href={tech.links.webpage}
												className={`${style.link}`}
												target="_BLANK"
												rel="noreferrer"
											>
												<i className="bi bi-globe2"></i> webpage
											</a>
										)}
										{tech.links?.github && (
											<a
												href={tech.links.github}
												className={`${style.link}`}
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
