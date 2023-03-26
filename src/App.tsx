import React from "react";
import Counter from "./Components/Counter";

const App = () => {
  const [isCount, setIsCount] = React.useState<number>(0);
  console.log(isCount);

  return (
    <div className="container">
      <h1>
        Learning <span>TypeScript</span>
      </h1>
      <div className="counter">
        <button onClick={() => setIsCount(isCount - 1)}>-</button>
        <Counter count={isCount} />
        <button onClick={() => setIsCount(isCount + 1)}>+</button>
      </div>
    </div>
  );
};

export default App;
