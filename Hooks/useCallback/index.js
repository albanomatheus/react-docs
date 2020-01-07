const { useState, useRef, memo, useCallback } = React;

const useCountRenders = () => {
  const renders = useRef(0);
  console.log(`renders: ${renders.current++} times`);
};

const Counter = memo(({ increment }) => {
  useCountRenders();
  return <button onClick={() => increment(5)}>click me</button>;
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
      <div>count: {count}</div>
      <Counter increment={increment} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
