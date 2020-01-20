const { useState, useReducer } = React;

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return { todos: [...state.todos, { task: action.todo, done: false }] };
    case "toogle-todo":
      return {
        todos: state.todos.map((todo, idx) =>
          idx === action.idx ? { ...todo, done: !todo.done } : todo
        )
      };
    default:
      return state;
  }
}

function Counter() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [task, setTask] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "add-todo", todo: task });
        setTask("");
      }}
    >
      <input value={task} onChange={e => setTask(e.target.value)} />

      {todos.map((todo, idx) => {
        return (
          <div
            key={idx}
            onClick={() => dispatch({ type: "toogle-todo", idx })}
            style={{
              cursor: "pointer",
              textDecoration: todo.done ? "line-through" : "",
              color: todo.done ? "gray" : "black"
            }}
          >
            {`${idx} - ${todo.task}`}
          </div>
        );
      })}
    </form>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
