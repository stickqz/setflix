import React from "react";
import "../Css/Loader.css";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
	return (
		<div className="main_loader">
			<div style={{ transform: "scale(5)" }}>
				<InfinitySpin width="200" color="#ff0000" />
			</div>
		</div>
	);
}

export default Loader;
