import Link from "next/link";
import React from "react";
import MainMenu from "../components/MainMenu/MainMenu";

const Custom500 = () => {
	return (
		<div className="bg-dark vh-100">
			<MainMenu />
			<div className="pt-5 h-100">
				<div className="d-flex align-items-center justify-content-center flex-column h-100">
					<div className="w-75">
						<small className={`${style.blink} text-warning`}>500 - PAGE NOT FOUND</small>
						<h3 className="text-success">Vaya, parece que nos hemos desviado del camino.</h3>
						<Link href={"/"} passHref>
							<a
								className={`nav-link text-success text-center border-bottom border-success p-1 mt-4 d-inline-block`}
							>
								Volver a Home
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Custom500;
