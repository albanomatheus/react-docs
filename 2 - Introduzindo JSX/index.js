const reactObj = React.createElement(
	"p",
	{ className: "principal" },
	"Não gosto de JSX!"
);

const jsx = <p>Não gosto de reactObj!</p>;

ReactDOM.render(reactObj, document.getElementById("reactObj"));
ReactDOM.render(jsx, document.getElementById("jsx"));
