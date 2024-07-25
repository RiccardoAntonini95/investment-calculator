import { useState } from "react";
import Header from "./components/header"
import UserInputs from "./components/UserInputs"
import Results from "./components/Results";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 10,
    duration: 1
})

const inputIsValid = inputs.duration >= 1

function handleManageValue (inputName, newValue) {
    setInputs(prevInputs => {
        return {
            ...prevInputs,
            [inputName] : +newValue  //il + forza la conversione in type number invece che string come darebbe event.target.value
        }
    })
}
  return (
    <>
    <Header />
    <UserInputs handleValues={handleManageValue} userInputs={inputs}/>
    {inputIsValid? <Results userInputs={inputs} /> : <p className="center">Please enter a duration greater than 0.</p>}
    </>
  )
}

export default App
