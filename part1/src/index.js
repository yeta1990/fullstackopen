import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick,text}) => (
  
  <button onClick={handleClick}>{text}</button>

)

const Buttons = (props) => {

  const handleClick = (feedback) => {
    console.log("pepe")
    switch(feedback){
      case "good":
        props.setGood(props.good + 1);
        props.setAverage(props.average + 1);
        break;
      case "neutral": 
        props.setNeutral(props.neutral + 1);
        props.setAverage(props.average);
      break;
      case "bad":
        props.setBad(props.bad + 1);
        props.setAverage(props.average - 1);
        break;
      default: 
      break;
    }

    //props.setStats({good, neutral, bad, average})
   

  }

  return (
    <div><Button handleClick={() => handleClick("good")} text="good" />
    <Button handleClick={() => handleClick("neutral")} text="neutral" />
    <Button handleClick={() => handleClick("bad")} text="bad" /> </div>
    )

}


const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0){
    return <div>No feedback given</div>
  }
  
  var positivecalc = props.good / (props.good + props.neutral + props.bad) * 100;
 
  return (
  
    <div>
      <Statistic text="good" value={props.good}/> <br />
      <Statistic text="neutral" value={props.neutral}/><br />
      <Statistic text="bad" value={props.bad}/><br />
      <Statistic text="all" value={props.good + props.neutral + props.bad}/><br />
      <Statistic text="average" value={props.average}/><br />
      <Statistic text="positive" value={positivecalc}/>  % <br />
   
    </div>
  )
};



const Statistic = ({text, value}) => {return (<span>{text} {value}</span>)}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
 // const [positive, setPositive] = useState(0)
  //const [stats, setStats] = useState(false)
 
  
  return (
    <div>
      <h1>give us feedback</h1>
      <Buttons good={good} neutral={neutral} bad={bad} average={average} setGood={setGood} setNeutral={setNeutral} setBad={setBad} setAverage={setAverage} />
     
      <p></p>
      <div><h1>statistics</h1></div>
      <Statistics good={good} neutral={neutral} bad={bad} average={average}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)