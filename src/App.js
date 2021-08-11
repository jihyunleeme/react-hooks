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

class AppUgly extends React.Component {
  state = {
    item: 1,
  };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h2 className="App"> hello world {item}</h2>
        <button onClick={this.increase}>increse</button>
        <button onClick={this.decrease}>decrese</button>
      </div>
    );
  }

  increase = () => {
    this.setState(state => {
      return {
        item: state.item + 1,
      };
    });
  };

  decrease = () => {
    this.setState(state => {
      return {
        item: state.item - 1,
      };
    });
  };
}
export default AppUgly;
