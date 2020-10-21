
import React from 'react'
import Numbers from './Numbers'

const Filter = (props) => {

    return (
        <div>
   
      <div>
          filter: <input onChange={props.filter} />
      </div>
 
    <br/>
    <Numbers persons={props.persons}/> </div>)
}

export default Filter