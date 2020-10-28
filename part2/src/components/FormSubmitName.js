

import React from 'react'

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
      
     
      </div>)
}

export default FormSubmitName