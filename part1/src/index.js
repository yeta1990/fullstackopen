import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick,text}) => (
  
  <button onClick={handleClick}>{text}</button>

)

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0){
    return <></>
  }
  return (
   
  <div>
    <div><h1>statistics</h1></div>
    <div>
      good {props.good} <br />
      neutral {props.neutral} <br />
      bad {props.bad}
    </div>
  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [stats, setStats] = useState(false)

  const handleClick = (feedback) => {
    console.log("pepe")
    switch(feedback){
      case "good":
        setGood(good + 1);
        break;
      case "neutral": 
        setNeutral(neutral + 1);
      break;
      case "bad":
        setBad(bad + 1);
        break;
      default: 
      break;
    }
    console.log(good);
    setStats({good, neutral, bad})
    console.log(stats)

  }

  return (
    <div>
      <h1>give us feedback</h1>
      <Button handleClick={() => handleClick("good")} text="good" />
      <Button handleClick={() =>handleClick("neutral")} text="neutral" />
      <Button handleClick={() =>handleClick("bad")} text="bad" />
      <p></p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)