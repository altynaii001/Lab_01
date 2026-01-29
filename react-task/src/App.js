import {useState} from "react";

function App() {
  const [count, setCount]=useState(0);

  return(
    <div style={{padding: "40px"}}>
      <h2>Counter</h2>

      <button onClick={() => setCount(count - 1 )}>-</button>
      <span style={{ margin:"0 20px"}}>{count}</span>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  );
}
export default App;