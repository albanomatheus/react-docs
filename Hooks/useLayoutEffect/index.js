const { useState, useRef, useLayoutEffect } = React;

const useMensure = deps => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
  }, deps);

  return [myRef, rect];
};

const App = () => {
  const [formRef, formMensure] = useMensure([]);
  return (
    <>
      <form ref={formRef}>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <br />
        <textarea defaultValue="Apenas algum texto em uma área de texto"></textarea>
        <br />
        <input type="submit" value="Enviar" />
      </form>
      <pre>{JSON.stringify(formMensure, null, 2)}</pre>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
