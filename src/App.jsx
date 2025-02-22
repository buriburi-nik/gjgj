import './App.css'
import { useState } from 'react'
import Sliders from './Components/Sliders'
import PieChart from './Components/PieChart' 

function App() {
  const [homeValue, setHomeValue] = useState(3000)
  const [downPayment, setDownPayment] = useState(600)
  const [interestRate, setInterestRate] = useState(5)
  const [loanTerm, setLoanTerm] = useState(15)
  const [loanAmount, setLoanAmount] = useState(2400)

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12

  let monthlyPayment = 0;
  let totalInterestGenerated = 0;

  if (interestPerMonth > 0) {
    monthlyPayment =
      (loanAmount *
        interestPerMonth *
        Math.pow(1 + interestPerMonth, totalLoanMonths)) /
      (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1);

    totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  }

  
  // const chartData = {
  //   label: ["Principal", "Interest"],
  //   datasets: [
  //     {
  //       label: "Loan Breakdown",
  //       data: [loanAmount, totalInterestGenerated],
  //       backgroundColor: ['rgba(100, 192, 75, 0.2)', 'rgba(138, 99, 255, 0.2)'],
  //       borderColor: ['rgb(125, 138, 4)', 'rgba(255, 99, 132, 1)'],
  //       borderWidth: 1,
  //     }]
  // }
  const chartData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Loan Breakdown",
        data: [loanAmount, totalInterestGenerated],
        backgroundColor: [
          'rgba(255, 159, 64,0.3)',
          'rgba(153, 102, 255,0.4)'
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(255, 86, 213)',
        ],
        borderWidth: 2,
      }
    ]
  }

  return (
    <>
      <h1 className="title">Bank of Reacts</h1>
      <div className="cont">
        
      <div className="left">
      
      <Sliders
        homeValue={homeValue}
        setHomeValue={setHomeValue}
        downPayment={downPayment}
        setDownPayment={setDownPayment}
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        loanTerm={loanTerm}
        setLoanTerm={setLoanTerm}
          />
          
        </div>

        <div className="right">

        <div className="result">
          <h2>
            Monthly Payment: {""}
            {monthlyPayment ? `$${monthlyPayment.toFixed(2)}` : "N/A"}
          </h2>
          <h3>
            Total Interest Generated: {""}
            {totalInterestGenerated ? `$${totalInterestGenerated.toFixed(2)}` : "N/A"}
          </h3>
        </div>  

        <div className="chart-container">
        <PieChart chartData={chartData} />
          </div>
          
        </div>

    </div>

    </>
  )
}

export default App
