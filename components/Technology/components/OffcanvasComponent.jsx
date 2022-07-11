import React, { useState } from "react";
import { Button, Col, Offcanvas, Row } from "react-bootstrap";

// sass
import style from "./OffcanvasComponent.module.scss";
import TechAsset from "./TechAsset";

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
					<Row className={"mt-3"}>
						{/* Technologies grid */}
						{assets.map((tech, idx) => (
							<TechAsset tech={tech} key={idx} />
						))}
					</Row>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default OffcanvasComponent;
