import React from "react";
import FormModal from "../../FormModal/FormModal";
import styled from "../../../styles/css/landing.module.css";

const Contact = () => {
	return (
		<div>
			<section className={`${styled.contactContainer}`} id="contact">
				<div>
					<h2 className="mb-4 text-center">¿Le apetece un café? </h2>
					<FormModal />
				</div>
			</section>
		</div>
	);
};

export default Contact;
