import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const CloudItem = () => {
	const cloudRef = useRef();

	useEffect(() => {
		const cloudRefContainer = cloudRef.current;
		const technologies = JSON.parse(
			'["HTML","CSS","JAVASCRIPT","WORDPRESS","PRESTASHOP","REACT","BOOTSTRAP","MATERIAL","AJAX","AXIOS","RESPONSIVE","SEO","REDUX","CRUD","NODE.js","JWT","MONGODB","API","HTTP","REST","EXPRESS","SOCKET.io","MYSQL","CRUD","FIREBASE","PLESK","CPANEL","FTP","GIT","GITHUB","NPM","SEO","CANVA","FIGMA","SSL","SSH"]'
		);
		const options = {
			maxSpeed: "slow",
			radius: cloudRef.current.clientWidth <= 425 ? cloudRef.current.clientWidth - 200 : 250,
			keep: false,
		};

		const tagCloud = TagCloud(cloudRefContainer, technologies, options);

		return () => {
			tagCloud.destroy();
		};
	}, []);

	return (
		<div
			ref={cloudRef}
			style={{
				margin: "auto",
				width: "100%",
				display: "flex",
				alignContent: "center",
				justifyContent: "center",
				overflow: "hidden",
			}}
		></div>
	);
};

export default CloudItem;
