import React, { useState, useEffect } from "react";

function UsersDetail({ match }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then(data => data.json())
      .then(data => setUser(data));

    return () => {};
  }, []);

  return <pre>{JSON.stringify(user, null, 4)}</pre>;
}

export default UsersDetail;
