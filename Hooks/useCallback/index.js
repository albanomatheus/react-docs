const { useState, useRef, memo, useCallback } = React;

const useCountRenders = () => {
  const renders = useRef(0);
  console.log("renders: ", renders.current++);
};

const Hello = memo(({ increment }) => {
  useCountRenders();
  return <button onClick={() => increment(5)}>hello</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
