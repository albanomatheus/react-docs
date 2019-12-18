class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value.toUpperCase() });
	}

	handleSubmit(event) {
		alert("Um nome foi enviado: " + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Nome:</label>
				<input
					type='text'
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<input type='submit' value='Enviar' />
			</form>
		);
	}
}

ReactDOM.render(<NameForm />, document.getElementById("root"));
