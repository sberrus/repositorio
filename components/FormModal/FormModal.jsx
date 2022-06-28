// imports
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import sanitize from "sanitize-html";
// styles
import style from "../../styles/css/components/modal.module.css";
//Modal Context
import { useModalContext } from "../../context/modalContext";

function FormModal() {
	// states
	const [email, setEmail] = useState("");
	const [subjet, setSubjet] = useState("");
	const [message, setMessage] = useState("");
	const [RCres, setRCRes] = useState(null);

	// modal config
	const modalContext = useModalContext();
	const handleClose = () => modalContext.toggleModal();
	const handleShow = () => {
		modalContext.toggleModal();
	};

	// submit data to backend
	const onSubmit = (e) => {
		e.preventDefault();
		const emailValidationRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
		if (!emailValidationRegex.test(email)) {
			console.log("Correo eléctronico no válido");
			return;
		}
		if (subjet.length <= 0) {
			console.log("Debe contener un subjet");
			return;
		}
		if (message.length <= 0) {
			console.log("El mensaje no debe estar vacío");
			return;
		}
		// 2. sanitize message
		const sMessage = sanitize(message);
		// 3. recaptcha res exists?
		if (!RCres) {
			console.log("reCaptcha no válido");
			return;
		}
		// 4. clear states
		setEmail("");
		setSubjet("");
		setMessage("");
		setRCRes(null);

		console.log("----------- MSG ----------");
		console.log({
			email,
			subjet,
			sMessage,
		});
	};

	const saveRecaptchaRes = (res) => {
		console.log(res);
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
								type="text"
								placeholder="satoshi@nakamoto.btc"
								autoFocus
								className={style.modalInput}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="asunto">
							<Form.Label>Asunto</Form.Label>
							<Form.Control
								type="text"
								placeholder='Esribir "asuntos" no es mi fuerte'
								autoFocus
								className={style.modalInput}
								value={subjet}
								onChange={(e) => setSubjet(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="cuerpo">
							<Form.Label>Mensaje</Form.Label>
							<Form.Control
								as="textarea"
								rows={8}
								className={style.modalInput}
								placeholder="TODO: Encontrar ahora quien rellene este formulario 👀"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer className={style.modalFooter}>
					<ReCAPTCHA sitekey="6LfIfKogAAAAAI_HE9bqBjC9FzFTKA5lN5W8Ymq6" onChange={saveRecaptchaRes} theme="dark" />
					{RCres !== null && (
						<Button variant="outline-light" type="submit" form="contact-form" className="float-end">
							Enviar Mensaje
						</Button>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default FormModal;
