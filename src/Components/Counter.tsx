import React from "react";

/*we can define our prop names and types in the interface and it will enforce those names and types whenever we use the components. */

interface CntI {
  count: number;
}

const Counter = ({ count }: CntI) => {

  return (
    <div className="container">
      
      <h3>{count}</h3>
      
    </div>
  );
};

export default Counter;
