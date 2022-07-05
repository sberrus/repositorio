// imports
import React from "react";
// components
import FormModal from "./components/FormModal";
import EmailSentToast from "./components/EmailSentToast";
// styles
import style from "../Landing.module.scss";

const Contact = () => {
	return (
		<div>
			<section className={`${style.contactContainer}`} id="contact">
				<div>
					<h2 className="mb-4 text-center">¿Le apetece un café? </h2>
					<FormModal />
				</div>
			</section>
			<EmailSentToast />
		</div>
	);
};

export default Contact;
