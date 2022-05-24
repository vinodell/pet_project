import React, {useState} from "react";

const INCREMENT = '+'
const DECREMENT = '-'
const RESET = 'oooops'

const Counter = () => {
  const [value, setValue] = useState(0)
  const inc = () => {
    setValue(value + 1)
  }
  const dec = () => {
    setValue(value - 1)
  }
  const res = () => {
    setValue(value * 0)
  }
  return (
    <div>
      <div>this is functional</div>
      TOTAL={value}
      <button onClick={inc} value={value}>
        {INCREMENT}
      </button>
      <button onClick={dec} value={value}>
        {DECREMENT}
      </button>
      <button onClick={res} value={value}>
        {RESET}
      </button>
    </div>
  );
}

export default Counter