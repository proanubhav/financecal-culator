
export const calculate = async (num1, num2, operator) => {
    try {
        const response = await fetch('http://localhost:3001/api/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ num1, num2, operator }),
        });
        return await response.json();
    } catch (error) {
        return { error: 'Failed to connect to server' };
    }
};
