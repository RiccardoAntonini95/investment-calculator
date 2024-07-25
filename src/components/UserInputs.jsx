import { useState } from "react";

export default function UserInputs () {
    const [inputs, setInputs] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 10,
        duration: 1
    })

    function handleManageValue (inputName, newValue) {
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [inputName] : newValue
            }
        })
    }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment:</label>
          <input type="number" name="initialInvestment" id="initialInvestment" value={inputs.initialInvestment} onChange={(e) => handleManageValue('initialInvestment', e.target.value)}  required />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment:</label>
          <input type="number" name="annualInvestment" id="annualInvestment" value={inputs.annualInvestment} onChange={(e) => handleManageValue('annualInvestment', e.target.value)} required />
        </p>
        <p>
          <label htmlFor="expectedReturn">Expected Return:</label>
          <input type="number" name="expectedReturn" id="expectedReturn" value={inputs.expectedReturn} onChange={(e) => handleManageValue('expectedReturn', e.target.value)} required />
        </p>
        <p>
          <label htmlFor="duration">Duration:</label>
          <input type="number" name="duration" id="duration" value={inputs.duration} onChange={(e) => handleManageValue('duration', e.target.value)} required/>
        </p>
      </div>
    </section>
  );
}