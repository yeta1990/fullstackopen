import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Favorite = (props) => {
  if (props.favorite === null){
    return <></>
  }

  return (<div><h2>Anecdote with most votes</h2>
  {anecdotes[props.favorite]} <br />
  tiene {props.votes[props.favorite]} votos</div> )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [favorite, setFavorite] = useState(null)
  const nextAnecdote = () => {
    
    var random = Math.floor(Math.random() * (anecdotes.length ) ) ;
    console.log(random)
    setSelected(random)
   
  }

  const addVote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1   
    setVotes(copy);

    const fav = Math.max.apply(Math, copy) - 1
    console.log(fav)

    const indexOfMaxValue = copy.indexOf(Math.max(...copy));
    setFavorite(indexOfMaxValue);

  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]} <br />
      Esta tiene {votes[selected]} votos <br />
      <button onClick={() => {addVote(selected)}} >Votar </button>
      <button onClick={nextAnecdote}>next Anecdote</button>
      <Favorite favorite={favorite} votes={votes} selected={selected} />
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)