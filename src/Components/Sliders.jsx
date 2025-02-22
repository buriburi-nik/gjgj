// import React from 'react'
import PropTypes from "prop-types";
export default function Sliders({
        homeValue,
        setHomeValue,
        downPayment,
        setDownPayment,
        loanAmount,
        setLoanAmount,
        interestRate,
        setInterestRate,
        loanTerm,
        setLoanTerm,
})
{

    const handleHomeValueChange = (e) => {
    const value = Number(e.target.value);
    setHomeValue(value);
    setLoanAmount(value - downPayment);
    };

    const handleDownPaymentChange = (e) => {
        const value = Number(e.target.value);
        setDownPayment(value);
        setLoanAmount(homeValue - value);
    };


    

    const handleLoanAmountChange = (e) => {
    setLoanAmount(Number(e.target.value));
    }   
    
    const handleInterestRateChange = (e) => {
        setInterestRate(Number(e.target.value));
    }
    
    const handleLoanTermChange = (e) => {
        setLoanTerm(Number(e.target.value));
    }

    
    
return (
    <div className="slider-cont">
        <div className="slider">
            <label>Home Value: ${homeValue}</label>
            <input
                type="range"
                min="0"
                max="10000"
                value={homeValue}
                step="100"
                onChange={handleHomeValueChange}
            />
        </div>
        <div className="slider">
            <label>Down Payment: ${downPayment}</label>
            <input
                type="range"
                min="0"
                max={homeValue}
                value={downPayment}
                step="100"
                onChange={handleDownPaymentChange}
            />
        </div>
        <div className="slider">
            <label>Loan Amount: ${loanAmount}</label>
            <input
                type="range"
                min="0"
                max={homeValue}
                value={loanAmount}
                step="100"
                onChange={handleLoanAmountChange}
            />
        </div>
        <div className="slider">
            <label>Interest Rate: {interestRate}%</label>
            <input
                type="range"
                min="0"
                max="30"
                value={interestRate}
                step="5"
                onChange={handleInterestRateChange}
            />
        </div>
        <div className="slider">
        <label>Tenure (Years): {loanTerm}</label>
        <select value={loanTerm} onChange={handleLoanTermChange}>
          <option value={5}>5 years</option>
          <option value={10}>10 years</option>
          <option value={15}>15 years</option>
          <option value={20}>20 years</option>
          <option value={25}>25 years</option>
          <option value={30}>30 years</option>
        </select>
      </div>

    </div>
    
);
}


Sliders.propTypes = {
  homeValue: PropTypes.number.isRequired,
  setHomeValue: PropTypes.func.isRequired,
  downPayment: PropTypes.number.isRequired,
  setDownPayment: PropTypes.func.isRequired,
  loanAmount: PropTypes.number.isRequired,
  setLoanAmount: PropTypes.func.isRequired,
  interestRate: PropTypes.number.isRequired,
  setInterestRate: PropTypes.func.isRequired,
  loanTerm: PropTypes.number.isRequired,
  setLoanTerm: PropTypes.func.isRequired,
};
