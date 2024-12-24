
import React, { useState } from 'react';
import { calculate } from '../utils/api';

function CalculatorForm() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        const response = await calculate(parseFloat(num1), parseFloat(num2), operator);
        if (response.error) {
            alert(response.error);
        } else {
            setResult(response.result);
        }
    };

    return (
        <div>
            <h2>Calculator</h2>
            <input
                type="number"
                placeholder="First Number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="number"
                placeholder="Second Number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button className='btn btn-primary' onClick={handleCalculate}>Calculate</button>
            {result !== null && <h3>Result: {result}</h3>}
        </div>
    );
}

export default CalculatorForm;
