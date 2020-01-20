const { useState, useEffect, useRef, useMemo } = React;

const useFetch = url => {
  const isAlive = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      isAlive.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then(x => x.json())
      .then(y => {
        if (isAlive.current) {
          setState({ data: y, loading: false });
        }
      });
  }, [url, setState]);

  return state;
};

const computeLongestName = arr => {
  if (!arr) {
    return [];
  }

  let longestName = "";

  arr.forEach(userObj => {
    if (userObj.name.length > longestName.length) {
      longestName = userObj.name;
    }
  });

  return longestName;
};

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  const longestName = useMemo(() => computeLongestName(data), [data, computeLongestName]);

  return (
    <>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <div>{longestName}</div>
    </>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
