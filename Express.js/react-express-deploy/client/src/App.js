import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState();

  useEffect(() => {
    fetch("/api/passwords")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return <div>{name} here</div>;
};

export default App;
