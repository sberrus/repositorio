// styles
import style from "./HeaderDisplay.module.scss";

const NextButton = ({ href = "#" }) => {
	return (
		<div className={style.buttonWrapper}>
			<div className={style.pulsarDecoration}>
				<a className={style.pulsarButton} href={href}>
					<div className="d-flex align-items-center justify-content-center h-100">
						<i className="bi bi-arrow-down text-light"></i>
					</div>
				</a>
			</div>
		</div>
	);
};

export default NextButton;
