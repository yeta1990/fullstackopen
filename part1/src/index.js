import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick,text}) => (
  
  <button onClick={handleClick}>{text}</button>

)

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0){
    return <></>
  }
  
  var positivecalc = props.good / (props.good + props.neutral + props.bad) * 100;
 
  return (
  <div>
    <div><h1>statistics</h1></div>
    <div>
      good {props.good} <br />
      neutral {props.neutral} <br />
      bad {props.bad} <br />
      all {props.good + props.neutral + props.bad} <br />
      average {props.average} <br />
      positive {positivecalc} %
    </div>
  </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
 // const [positive, setPositive] = useState(0)
  const [stats, setStats] = useState(false)
 
  


  const handleClick = (feedback) => {
    console.log("pepe")
    switch(feedback){
      case "good":
        setGood(good + 1);
        setAverage(average + 1);
        break;
      case "neutral": 
        setNeutral(neutral + 1);
        setAverage(average);
      break;
      case "bad":
        setBad(bad + 1);
        setAverage(average - 1);
        break;
      default: 
      break;
    }
  
    var positivecalc = good / (good+neutral+bad) * 100;
   // console.log(positivecalc)
   // setPositive(positivecalc);
    setStats({good, neutral, bad, average})
    console.log(stats)

  }

  //good: 1, neutral: 0, bad: -1

  

  return (
    <div>
      <h1>give us feedback</h1>
      <Button handleClick={() => handleClick("good")} text="good" />
      <Button handleClick={() => handleClick("neutral")} text="neutral" />
      <Button handleClick={() => handleClick("bad")} text="bad" />
      <p></p>
      <Statistics good={good} neutral={neutral} bad={bad} average={average}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)