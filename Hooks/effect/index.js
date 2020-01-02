const { useState, useEffect } = React;

function Tick() {
  const [currentTime, updateTime] = useState(new Date().toLocaleTimeString());

  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      updateTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCount(count + 1);
    return () => console.log("oi");
  }, [currentTime]);

  return (
    <p>
      {currentTime} atualizei {count}x
    </p>
  );
}

ReactDOM.render(<Tick />, document.getElementById("root"));
