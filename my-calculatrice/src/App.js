import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App =() => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const backspace = () => {
        setResult(result.slice(0, -1));
    }

    const calculate = () => {
      try {
          setResult(evaluate(result).toString());
      } catch (error) {
          setResult('Error');
      }
    }
  

    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result} readOnly />
                </form>

                <div className="keypad">
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button className="highlight"name="+" onClick={handleClick}>+</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button className="highlight" name="-" onClick={handleClick}>-</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button className="highlight" name="*" onClick={handleClick}>*</button>
                    <button className="highlight" onClick={backspace} id="backspace">c</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button onClick={calculate}>=</button>
                    <button className="highlight" name="/" onClick={handleClick}>/</button>
                </div>
            </div>
        </>
    );
}

export default App;