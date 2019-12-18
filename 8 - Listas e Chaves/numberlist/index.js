function NumberList(props) {
	const listItens = props.numbers.map(number => (
		<li key={number.toString()}>{number}</li>
	));

	return <ul>{listItens}</ul>;
}

ReactDOM.render(
	<NumberList numbers={[0, 1, 2, 3, 4]} />,
	document.getElementById("root")
);
