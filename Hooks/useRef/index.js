const { useEffect, useRef } = React;

function App() {
  const formElementRef = useRef(null);
  const nomeElementRef = useRef(null);
  const sobrenomeElementRef = useRef(null);
  const submitElementRef = useRef(null);

  useEffect(() => {
    nomeElementRef.current.focus();
  }, []);

  const nomeKeyDown = e => {
    if (e.key === "Enter") {
      sobrenomeElementRef.current.focus();
    }
  };

  const sobrenomeKeyDown = e => {
    if (e.key === "Enter") {
      submitElementRef.current.focus();
    }
  };

  const submitKeyDown = e => {
    if (e.key === "Enter") {
      formElementRef.current.submit();
    }
  };

  return (
    <form ref={formElementRef} onSubmit={e => e.preventDefault()}>
      <input ref={nomeElementRef} onKeyDown={nomeKeyDown} type="text" placeholder="Nome..." />
      <br />
      <input
        ref={sobrenomeElementRef}
        onKeyDown={sobrenomeKeyDown}
        type="text"
        placeholder="Sobrenome..."
      />
      <br />
      <button onKeyDown={submitKeyDown} ref={submitElementRef}>
        Submit
      </button>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
