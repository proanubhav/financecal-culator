import React, { useState } from "react";
import { calculate } from "../utils/api";
const iconimages = require.context("../assets/images/icon", false, /\.svg$/);

function CalculatorForm() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualStepUP, setAnnualStepUP] = useState("");
  const [expectdReturnRate, setExpectdReturnRate] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [deflation, setDeflation] = useState(""); // State for deflation (optional)
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    if (!monthlyInvestment || !annualStepUP || !expectdReturnRate || !investmentPeriod || !deflation) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await calculate(
        parseFloat(monthlyInvestment),
        parseFloat(annualStepUP),
        parseFloat(expectdReturnRate),
        parseFloat(investmentPeriod),
        deflation ? parseFloat(deflation) : null // Pass deflation only if provided
      );

      if (response.error) {
        alert(response.error);
      } else {
        setResult(response);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="vcamp-text-block-one border-bottom pt-180 md-pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12 m-auto">
            <div className="text-wrapper text-center ps-0">
              <div className="title-style-two">
                <h3 className="title">
                  Finance <span>Calculator</span>
                </h3>
              </div>
              <p className="meta-info-text text-lg">
                One effective strategy for investing in tax-advantaged mutual funds is through a <code>Systematic Investment Plan (SIP)</code>, where you regularly invest small amounts on a weekly, monthly, or quarterly basis based on your financial situation.
              </p>
              <div className="row">
                <form className="col-md-6 m-auto mt-50 lg-mt-30 text-start">
                  <div className="form-style-one with-border">
                    {["Monthly Investment", "Annual Step Up", "Expected Return Rate", "Investment Period"].map((label, idx) => {
                      const setValue = [setMonthlyInvestment, setAnnualStepUP, setExpectdReturnRate, setInvestmentPeriod][idx];
                      const placeholder = ["₹10000", "10%", "12%", "10 Yr"][idx];
                      const value = [monthlyInvestment, annualStepUP, expectdReturnRate, investmentPeriod][idx];
                      return (
                        <div className="row controls" key={label}>
                          <div className="col-12">
                            <div className="input-group-meta form-group mb-25">
                              <label>{label}*</label>
                              <input
                                type="number"
                                placeholder={placeholder}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* Optional Deflation Input */}
                    <div className="row controls">
                      <div className="col-12">
                        <div className="input-group-meta form-group mb-25">
                          <label>Deflation Rate</label>
                          <input
                            type="number"
                            placeholder="e.g., 2%"
                            value={deflation}
                            onChange={(e) => setDeflation(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="theme-btn-one ripple-btn float-end"
                      onClick={handleCalculate}
                    >
                      Calculate <img src={iconimages("./icon_03.svg")} alt="" />
                    </button>
                  </div>
                </form>
                {result && (
                  <div className="col-md-6 text-start">
                    <h3>Maturity Amount: ₹{result.maturityAmount}</h3>
                    <h4>Year Breakdown</h4>
                    <div className="table-responsive table-scroll">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Year</th>
                            <th>Invested Amount</th>
                            <th>Resultant Amount</th>
                            <th>Deflation Amount</th> {/* New Column for Deflation Amount */}
                          </tr>
                        </thead>
                        <tbody>
                          {result.yearBreakdown?.map((item, index) => (
                            <tr key={index}>
                              <td>{item.year}</td>
                              <td>{item.investedAmount}</td>
                              <td>{item.maturityAmount}</td>
                              <td>{item.deflationAmount || "N/A"}</td> {/* Render Deflation Amount */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorForm;
