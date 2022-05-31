/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styled from "../../../styles/css/landing.module.css";
import CloudItem from "./CloudItem";

const About = () => {
	return (
		<div>
			<section className="position-relative" id="about">
				<div className={styled.aboutSection}>
					<Container className="pt-5 d-flex">
						<Row>
							<Col md={6} className="m-auto">
								<div className={`${styled.aboutTitleContainer} my-3 mb-5`}>
									<div className={styled.aboutTitleBgDecoration}>
										<img className="h-100" src="/assets/img/blobDecoration2.svg" alt="" />
									</div>
									<h2 className="text-center fw-light bg-dark rouded p-1">Bienvenido!</h2>
								</div>
								<div className={`${styled.aboutHistory} text-center fw-light mb-5`}>
									<p>
										¡Hola! Mi nombre es{" "}
										<span className="text-success fw-normal">Samuel Berrus</span> y soy
										desarrollador web fullstack.
									</p>
									<p>
										Durante la pandemia un amigo me dio un consejo que fue el que en
										realidad me inicio en este mundillo.
									</p>
									<div className="d-flex justify-content-center w-75 m-auto">
										<div className="w-100 fst-italic">
											<p>
												&quot;Aprende Java&quot; <br />
												Att: D. Bermudez
											</p>
										</div>
									</div>
									<p>
										Y a partir de entonces empeze esta increible y{" "}
										<small className="text-danger"> dolorosa </small>tengo que admitir,
										senda del desarrollador.
									</p>
									<p>
										Han pasado varios meses desde entonces y con ellos he adquirido un set
										amplio de habilidades y manejo de herramientas de todo tipo, academica
										y profesionalmente.
									</p>
									<p>
										A lo largo de estos años he desarrollado habilidades en las siguientes
										herramientas{" "}
										<small className="text-success">
											aunque seguramente me estoy olvidando de varias
										</small>
										:
									</p>
								</div>
								<CloudItem />
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</div>
	);
};

export default About;
