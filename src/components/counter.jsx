import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "Arial"
    }}>

      <h1>React Counter App</h1>

      <h2 style={{fontSize:"40px", color:"blue"}}>
        {count}
      </h2>

      <button onClick={increment} style={{margin:"10px"}}>
        Increment
      </button>

      <button onClick={decrement} style={{margin:"10px"}}>
        Decrement
      </button>

      <button onClick={reset} style={{margin:"10px"}}>
        Reset
      </button>

    </div>
  );
}

export default Counter;