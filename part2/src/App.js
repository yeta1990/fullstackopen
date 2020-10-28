
import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import FormSubmitName from './components/FormSubmitName'
import noteService from './services/Note'
import Numbers from './components/Numbers'
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ personsFiltered, setPersonsFiltered] = useState([])

  useEffect(() => {
    const req = noteService.getAll()
    req.then(res => {console.log(res)
      setPersons(res)
      
    })
  
  }, [])

  const submitPhoneBookForm = (event) => {
    event.preventDefault()
    const noteObject = {
        name: newName,
        number: newNumber
    }
    duplicates(noteObject)
      setNewName('')
      setNewNumber('')
    
    
    
  }

  const handleNameStageChange = (event) => {
    setNewName(event.target.value)

  }
  
  const handleNumberStageChange = (event) => {
    setNewNumber(event.target.value)
  }

  const duplicates = (personToCheck) => {
    const result = persons.filter(person => person.name === personToCheck.name)
    console.log("result ", result)
    if (result.length > 0 & result[0].number === personToCheck.number) {
      return window.alert("duplicado")}

    else if (result.length > 0 & result[0].number !== personToCheck.number) {
      const answerPutNumber = window.confirm("Este nombre ya existe pero has introducido otro teléfono, lo sustituimos?");
      if (answerPutNumber) {
          const noteToPut = {...personToCheck}
          console.log("el id es " + result[0].id)
          noteToPut['id'] = result[0].id
          const reqput = noteService.putNote(noteToPut)
          reqput.then(() => {
              const req = noteService.getAll()
              req.then(res => {console.log(res)
                setPersons(res)
                return true;
              })
            
          })

      }
    }
    else {
        noteService.add(personToCheck).then(res => setPersons(persons.concat(personToCheck)));
    }

    
    setNewName('');
    setNewNumber('')

  
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
      <FormSubmitName newName={newName} newNumber={newNumber} handleNumberStageChange={handleNumberStageChange} handleNameStageChange={handleNameStageChange} submitPhoneBookForm={submitPhoneBookForm}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App