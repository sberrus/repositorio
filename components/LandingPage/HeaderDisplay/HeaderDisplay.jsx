import NextButton from "../../NextButton/NextButton";
import PulsarDot from "../../PulsarDot/PulsarDot";

import styled from "../../../styles/css/landing.module.css";
// import styled from "../styles/css/landing.module.css";

const HeaderDisplay = () => {
	return (
		<>
			<section className={`${styled.headerDisplaySection}`} id="headerDisplay">
				{/*  */}
				{/* todo: add soft mouse effect for the bg */}
				<div className={styled.decorationHolder}>
					<div className={`${styled.animationContainer}`}>
						<div className={styled.titleContainer}>
							<h1 className={styled.title}>SAMDEV</h1>
						</div>
						<div className={styled.subtitleContainer}>
							<div className={styled.frame1}>
								<h2 className={styled.subtitle1}>Desarrollador</h2>
							</div>
							<div className={styled.frame2}>
								<h2 className={styled.subtitle2}>Web</h2>
							</div>
							<div className={styled.frame3}>
								<h2 className={styled.subtitle3}>
									Fullstack
									<PulsarDot />
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className={styled.buttonHolder}>
					<NextButton href={"#about"}></NextButton>
				</div>
			</section>
		</>
	);
};

export default HeaderDisplay;
