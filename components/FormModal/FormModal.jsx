import { Button, Form, Modal } from "react-bootstrap";

import style from "../../styles/css/components/modal.module.css";

//Modal Context
import { useModalContext } from "../../context/modalContext";
import React from "react";

function FormModal() {
	const modalContext = useModalContext();

	const handleClose = () => modalContext.toggleModal();
	const handleShow = () => {
		modalContext.toggleModal();
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log("mensaje enviado");
	};
	return (
		<>
			<Button variant="outline-success w-100 py-3" onClick={handleShow}>
				Contactemos ☕
			</Button>

			{/* Background backdrop */}
			<Modal show={modalContext.show} onHide={handleClose} centered className={style.modal}>
				<Modal.Header closeButton className={style.modalHeader}>
					<Modal.Title>¿Con o sin azúcar?</Modal.Title>
				</Modal.Header>
				<Modal.Body className={style.modalBody}>
					<Form
						id="contact-form"
						onSubmit={(e) => {
							onSubmit(e);
						}}
					>
						<Form.Group className="mb-3" controlId="correo">
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control
								type="email"
								placeholder="satoshi@nakamoto.btc"
								autoFocus
								className={style.modalInput}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="asunto">
							<Form.Label>Asunto</Form.Label>
							<Form.Control
								type="text"
								placeholder='Esribir "asuntos" no es mi fuerte'
								autoFocus
								className={style.modalInput}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="cuerpo">
							<Form.Label>Mensaje</Form.Label>
							<Form.Control
								as="textarea"
								rows={8}
								className={style.modalInput}
								placeholder="TODO: Encontrar ahora quien rellene este formulario 👀"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				[TODO AÑADIR CAPTCHA]
				<Modal.Footer className={style.modalFooter}>
					<Button variant="outline-danger" onClick={handleClose} disabled>
						Cerrar
					</Button>
					<Button variant="outline-light" type="submit" form="contact-form">
						Enviar Mensaje
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default FormModal;
