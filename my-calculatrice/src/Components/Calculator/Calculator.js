import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState("");

    const handleButtonClick = (value) => {
        setDisplayValue(displayValue + value);
    }

    const handleCalculate = () => {
        try {
            const result = evaluate(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue("Error");
        }
    }

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <div className="buttons">
                <Button onClick={handleButtonClick}>1</Button>
                {/* Ajoutez d'autres boutons ici */}
                <Button onClick={handleCalculate}>=</Button>
            </div>
        </div>
    );
}

export default Calculator;
