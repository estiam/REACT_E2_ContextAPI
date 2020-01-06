import React from 'react'
import CounterContext from './Providers/CounterContext';

const Incrementer = () => {
  return (
    <CounterContext.Consumer>
      {({ increment }) => {
        return <button onClick={increment}>INCREMENT</button>
      }}
    </CounterContext.Consumer>
  );
}

export default Incrementer;