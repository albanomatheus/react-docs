const tick = () => {
	const element = (
		<div>
			<h1>Agora é {new Date().toLocaleTimeString()}</h1>
		</div>
	);

	ReactDOM.render(element, document.getElementById("root"));
};

setInterval(tick, 1000);
