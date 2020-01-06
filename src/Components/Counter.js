import React from 'react'
import CounterContext from './Providers/CounterContext';

const Counter = () => {
  return (
    <CounterContext.Consumer>
      {({ counter }) => {
        return (
          <div>
            {counter}
          </div>
        );
      }}
    </CounterContext.Consumer>
  );
}

export default Counter;