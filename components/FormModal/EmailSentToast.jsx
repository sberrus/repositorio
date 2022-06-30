/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Col, Container, Row, Toast } from "react-bootstrap";
import { useModalContext } from "../../context/modalContext";

const EmailSentToast = () => {
	const modalContext = useModalContext();

	return (
		<Container fluid className="position-sticky bottom-0">
			<Row>
				<Col xs={6}>
					<Toast
						onClose={() => modalContext.toggleToast()}
						show={modalContext.showToast}
						delay={5000}
						autohide
						bg={"dark"}
						className="border border-success mb-2"
					>
						<Toast.Header className="bg-dark text-success" closeVariant="white">
							<strong className="me-auto">Mensaje enviado!</strong>
						</Toast.Header>
						<Toast.Body>Muchas gracias. En breves le contactaré por email buen dia!</Toast.Body>
					</Toast>
				</Col>
			</Row>
		</Container>
	);
};

export default EmailSentToast;
