import {useState} from "react";
import "./App.css";

function App() {
  const [highlighted, setHighlighted]=useState(false);

  return(
    <div style={{padding: "40px"}}>
      <h2>Declarative React Version</h2>

      <button onClick={() => setHighlighted(!highlighted)}>
        Toggle Highlight
      </button>
      <p className={highlighted ? "highlight" : ""}>
        This paragraph will be highlighted using React state.
      </p>
    </div>
  );
}
export default App;