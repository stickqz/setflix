import React from "react";
import "../Css/Info.css";

function Info(props) {
	const check = props.adult ? "Yes" : "No";

	return (
		<div
			className="info_main"
			onClick={(e) => {
				e.stopPropagation();
				props.enabling();
			}}
		>
			<div
				className="info_container"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="info">
					<img
						src={`https://image.tmdb.org/t/p/w500/${props.image}`}
						alt=""
					/>
					<div className="info_text">
						<h1>{props.title}</h1>
						<p>{props.overview}</p>
						<p>Release Date :{props.release}</p>
						<p>Original Language :{props.language}</p>
						<p>Adult : {check}</p>
						<p>Average Vote :{props.vote}</p>
						<img
							className="info_img"
							src="https://img.icons8.com/windows/32/000000/macos-close.png"
							alt=""
							onClick={props.enabling}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Info;
