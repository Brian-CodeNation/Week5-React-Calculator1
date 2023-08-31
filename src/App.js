import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {

  const [sum, setSum] = useState("");
  const buttons = ["7", "8", "9", "C", "4", "5", "6", "x", "1", "2", "3", "/", "+", "0", "-", "="];

  const handleClick = (string) => {
    if (string === "="){
      let expression = sum;
      setSum(evaluate(expression))
    } else if (string === "C") {
      setSum("")
    } else {
      setSum(sum + string)
    }
  }

  return (
    <div className="App">
      <h1>{sum}</h1>
      <div className='buttonWrap'>
        {
          buttons.map((button, index) => {
            return (
              <button onClick={() => handleClick(button)} key={index}>{button}</button>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
