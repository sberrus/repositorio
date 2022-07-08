import React from "react";
import { Col } from "react-bootstrap";
import {
	AxiosIcon,
	BootstrapIcon,
	ChartJsIcon,
	CssIcon,
	HtmlIcon,
	JsIcon,
	ReactIcon,
	ReactRouterDomIcon,
} from "../../../../components/Icons/Icons";
import style from "./OffcanvasComponent.module.scss";

const TechAsset = ({ tech }) => {
	return (
		<Col xs={12} md={tech?.highlight ? 12 : 6} className={`${style.card} mb-3`}>
			{tech?.building && (
				<div className={style.building}>
					<small className="text-success">Building...</small>
					<h5>{tech.title}</h5>
					<div className={style.linkHolder}>
						<a href={tech.links.github} className={`${style.link}`} target="_BLANK" rel="noreferrer">
							<i className="bi bi-github"></i> github
						</a>
					</div>
				</div>
			)}
			{/* Body holder */}
			<div className={style.cardBody}>
				{tech?.highlight && (
					<>
						{/* comment heiglight */}
						<span className={`${style.comment} ${style.blink}`}>
							Proyecto destacado <br />
						</span>
					</>
				)}
				<p>{tech.title}</p>
				<p>{tech.description}</p>

				<div className={style.techIconContainer}>
					{tech?.techStack?.includes("Html") && (
						<div className={style.iconContainer}>
							<HtmlIcon />
						</div>
					)}
					{tech?.techStack?.includes("Css") && (
						<div className={style.iconContainer}>
							<CssIcon />
						</div>
					)}
					{tech?.techStack?.includes("Js") && (
						<div className={style.iconContainer}>
							<JsIcon />
						</div>
					)}
					{tech?.techStack?.includes("React") && (
						<div className={style.iconContainer}>
							<ReactIcon />
						</div>
					)}
					{tech?.techStack?.includes("Bootstrap") && (
						<div className={style.iconContainer}>
							<BootstrapIcon />
						</div>
					)}
					{tech?.techStack?.includes("ChartJs") && (
						<div className={style.iconContainer}>
							<ChartJsIcon />
						</div>
					)}
					{tech?.techStack?.includes("ReactRouterDom") && (
						<div className={style.iconContainer}>
							<ReactRouterDomIcon />
						</div>
					)}
					{tech?.techStack?.includes("Axios") && (
						<div className={style.iconContainer}>
							<AxiosIcon />
						</div>
					)}
				</div>

				{/* Links Holder */}
				<div className={style.linkHolder}>
					{tech.links?.webpage && (
						<a href={tech.links.webpage} className={`${style.link}`} target="_BLANK" rel="noreferrer">
							<i className="bi bi-globe2"></i> webpage
						</a>
					)}
					{tech.links?.github && (
						<a href={tech.links.github} className={`${style.link}`} target="_BLANK" rel="noreferrer">
							<i className="bi bi-github"></i> github
						</a>
					)}
				</div>
			</div>
		</Col>
	);
};

export default TechAsset;
