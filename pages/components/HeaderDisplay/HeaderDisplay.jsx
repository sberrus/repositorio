import NextButton from "./components/NextButton";
import PulsarDot from "./components/PulsarDot";

import style from "../Landing.module.scss";

const HeaderDisplay = () => {
	return (
		<>
			<section className={`${style.headerDisplaySection}`} id="headerDisplay">
				{/*  */}
				{/* todo: add soft mouse effect for the bg */}
				<div className={style.decorationHolder}>
					<div className={`${style.animationContainer}`}>
						<div className={style.titleContainer}>
							<h1 className={style.title}>SAMDEV</h1>
						</div>
						<div className={style.subtitleContainer}>
							<div className={style.frame1}>
								<h2 className={style.subtitle1}>Desarrollador</h2>
							</div>
							<div className={style.frame2}>
								<h2 className={style.subtitle2}>Web</h2>
							</div>
							<div className={style.frame3}>
								<h2 className={style.subtitle3}>
									Fullstack
									<PulsarDot />
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className={style.buttonHolder}>
					<NextButton href={"#about"}></NextButton>
				</div>
			</section>
		</>
	);
};

export default HeaderDisplay;
