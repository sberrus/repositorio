import styled from "../../styles/css/components/pulsarButton.module.css";

const NextButton = ({ href = "#" }) => {
	return (
		<div className={styled.buttonWrapper}>
			<div className={styled.pulsarDecoration}>
				<a className={styled.pulsarButton} href={href}>
					<div className="d-flex align-items-center justify-content-center h-100">
						<i className="bi bi-arrow-down text-light"></i>
					</div>
				</a>
			</div>
		</div>
	);
};

export default NextButton;
