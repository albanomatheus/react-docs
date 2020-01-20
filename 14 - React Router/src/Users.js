import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  const userLinkStyle = {
    margin: "10px",
    background: "#c2c2c2",
    border: "none",
    padding: "10px",
    borderRadius: "3px"
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(data => setUsers(data));
    return () => {};
  }, []);

  return (
    <div>
      {users.map(user => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <button style={userLinkStyle}>{user.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default Users;
