import React from 'react'

const Decrementer = () => {
  return (
    <CounterContext.Consumer>
      {({ decrement }) => {
        return <button onClick={decrement}>DECREMENT</button>
      }}
    </CounterContext.Consumer>
  );
}

export default Decrementer;