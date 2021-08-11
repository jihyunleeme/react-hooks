import React, { useState } from 'react';

const App = () => {
  const [item, setItem] = useState(0);
  const increase = () => setItem(item + 1);
  const decrease = () => setItem(item - 1);

  return (
    <div className="App">
      <h2 className="App"> hello world {item}</h2>
      <button onClick={increase}>increse</button>
      <button onClick={decrease}>decrese</button>
    </div>
  );
};

export default App;
