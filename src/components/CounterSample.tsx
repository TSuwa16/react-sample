import { useState } from "react";

type CounterProps = {
  initValue: number;
};

const CounterSample = (props: CounterProps): JSX.Element => {
  const { initValue } = props;

  const [count, setCount] = useState(initValue);
  return (
    <div>
      <h1>Counter</h1>
      <div data-test="count-value">{count}</div>
      <button
        data-test="count-plus"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <button
        data-test="count-minus"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
    </div>
  );
};

export default CounterSample;
