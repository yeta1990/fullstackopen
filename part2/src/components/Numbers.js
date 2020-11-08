import React from 'react'
import noteService from '../services/Note'

const Numbers = ({persons, setPersons}) => { 
    console.log(persons, "son estos")
    
    const tryToDelete = (id) => {
        console.log(id)
        const result = window.confirm("Quieres borrar la nota con id " + id + "?");
        if (result) {
            const reqdelete = noteService.deleteNote(id)
            reqdelete.then(() => {
                const req = noteService.getAll()
                req.then(res => {console.log(res)
                  setPersons(res)
                  
                })
              
            })

        }

    }

    if (persons.length === 0) {
        return <> </>
    }
    return <div >
        {persons.map(person => {
            
            return (<div key={person.number}> {person.name} {person.number} <button key={person.name} onClick={() => {tryToDelete(person.id)}}>delete</button></div>)
               
        }
    )}
    </div>
    }


    export default Numbers