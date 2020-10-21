import React, { useState } from 'react'

import Filter from './components/Filter'
import FormSubmitName from './components/FormSubmitName'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ personsFiltered, setPersonsFiltered] = useState([])

  const submitPhoneBookForm = (event) => {
    event.preventDefault()
    const noteObject = {
        name: newName,
        number: newNumber
    }
    if (duplicates(newName).length > 0) return window.alert("duplicado");
    setPersons(persons.concat(noteObject))
    setNewName('');
    setNewNumber('')
  }

  const handleNameStageChange = (event) => {
    setNewName(event.target.value)

  }
  
  const handleNumberStageChange = (event) => {
    setNewNumber(event.target.value)
  }

  const duplicates = (onename) => {
    const result = persons.filter(person => person.name === onename)
    return result
  }

  const filter = (event) => {
   setPersonsFiltered(persons.filter(person => person.name === event.target.value))
    }

  return (
    <div>
        
      <h2>Phonebook</h2>
      <h3>filter</h3>
      
      <Filter filter={filter} persons={personsFiltered}/> 
      <h3>add new</h3>
      <FormSubmitName persons={persons} newName={newName} newNumber={newNumber} handleNumberStageChange={handleNumberStageChange} handleNameStageChange={handleNameStageChange} submitPhoneBookForm={submitPhoneBookForm}/>
    </div>
  )
}

export default App