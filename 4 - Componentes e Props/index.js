function Welcome(props) {
	return <p>Hellow, {props.name}! </p>;
}

function App() {
	return (
		<div>
			<Welcome name='Matheus' />
			<Welcome name='Gabriel' />
			<Welcome name='Thiago' />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
