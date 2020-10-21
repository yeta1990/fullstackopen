

import React from 'react'
import Numbers from './Numbers'

const FormSubmitName = (props) => {
    return (<div>
        <form onSubmit={props.submitPhoneBookForm}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameStageChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberStageChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={props.persons}/>
      </div>)
}

export default FormSubmitName