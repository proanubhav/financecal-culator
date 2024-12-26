
export const calculate = async (monthlyInvestment, annualStepUP, expectdReturnRate, investmentPeriod) => {
    try {
        const response = await fetch('http://localhost:3001/api/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ monthlyInvestment, annualStepUP, expectdReturnRate, investmentPeriod }),
        });
        return await response.json();
    } catch (error) {
        return { error: 'Failed to connect to server' };
    }
};
