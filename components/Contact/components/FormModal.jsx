// imports
import { Button, Col, Container, Form, Modal, Row, Toast } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import sanitize from "sanitize-html";
import { useForm } from "react-hook-form";
//Modal Context
import { useModalContext } from "/context/modalContext";
import { useRef, useState } from "react";
// styles
import style from "./FormModal.module.scss";

function FormModal() {
	// states
	const [RCres, setRCRes] = useState(null);
	const [isError, setIsError] = useState(false);
	const [isSending, setIsSending] = useState(false);

	// ref
	const emailForm = useRef();
	// react-hook-form
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// modal config
	const modalContext = useModalContext();
	const handleClose = () => modalContext.toggleModal();
	const handleShow = () => {
		modalContext.toggleModal();
	};

	const onSubmit = async (data) => {
		// recaptcha res exists?
		if (!RCres) {
			console.log("reCaptcha obligatorio");
			return;
		}
		try {
			await sendEmail(data);
		} catch (error) {
			console.log(error);
		}
	};

	// send the email data to backend
	const sendEmail = async (data) => {
		setIsSending(true);
		setIsError(false);
		// sanitize message
		const sMessage = sanitize(data.message);

		const emailData = { ...data, message: sMessage };
		emailData["g-recaptcha-response"] = RCres;

		const urlFormApi = "https://samdev-backend.herokuapp.com/api/contact-form";
		// const urlFormApi = "http://localhost:8080/api/contact-form";

		try {
			const res = await fetch(urlFormApi, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(emailData),
			});
			if (res.status !== 200) {
				// show error
				setIsSending(false);
				setIsError(true);
				console.log(await res.json());
			} else {
				reset();
				setRCRes(null);
				// show successfully sent email toast
				modalContext.toggleToast();
				modalContext.toggleModal();
				setIsSending(false);
			}
		} catch (error) {
			setIsSending(false);
			setIsError(true);
		}
	};

	const saveRecaptchaRes = (res) => {
		setRCRes(res);
	};
	return (
		<>
			<Button variant="outline-success w-100 py-3" onClick={handleShow}>
				Contactemos ☕
			</Button>

			{/* Background backdrop */}
			<Modal
				show={modalContext.show}
				onHide={handleClose}
				centered
				backdrop={"static"}
				className={style.modal}
				contentClassName="bg-dark"
			>
				<Modal.Header closeButton className={style.modalHeader}>
					<Modal.Title>¿Con o sin azúcar?</Modal.Title>
				</Modal.Header>
				<Modal.Body className={style.modalBody}>
					<Form id="contact-form" onSubmit={handleSubmit(onSubmit)} ref={emailForm}>
						<Form.Group className="mb-3" controlId="correo">
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control
								type="email"
								placeholder="satoshi@nakamoto.btc"
								autoFocus
								isInvalid={errors.from}
								className={style.modalInput}
								{...register("from", {
									required: true,
									pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
								})}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="asunto">
							<Form.Label>Asunto</Form.Label>
							<Form.Control
								type="text"
								placeholder='Esribir "asuntos" no es mi fuerte'
								className={style.modalInput}
								isInvalid={errors.subject}
								{...register("subject", {
									required: true,
								})}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="cuerpo">
							<Form.Label>Mensaje</Form.Label>
							<Form.Control
								as="textarea"
								rows={8}
								className={style.modalInput}
								placeholder="TODO: Encontrar ahora quien rellene este formulario 👀"
								isInvalid={errors.message}
								{...register("message", {
									required: true,
								})}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer className={style.modalFooter}>
					<ReCAPTCHA sitekey="6LfIfKogAAAAAI_HE9bqBjC9FzFTKA5lN5W8Ymq6" onChange={saveRecaptchaRes} theme="dark" />
					<Container>
						<Row>
							<Col xs={12}>
								<Toast
									onClose={() => setIsError(false)}
									show={isError}
									delay={10000}
									autohide
									bg={"danger"}
									className="float-end"
								>
									<Toast.Body>Ha ocurrido un error al enviar el formulario. Intentelo más tarde</Toast.Body>
								</Toast>
							</Col>
						</Row>
					</Container>
					{RCres !== null && (
						<>
							{isSending ? (
								<div className={style.ldsDualRing}></div>
							) : (
								<Button variant="outline-light" type="submit" form="contact-form" className={"float-end"}>
									Enviar Mensaje
								</Button>
							)}
						</>
					)}
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default FormModal;
