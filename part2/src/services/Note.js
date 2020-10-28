import axios from 'axios'


const getAll = () => {

    const request = axios.get('http://localhost:3001/numbers')
    return request.then(res => {
        //console.log(res.data);
        console.log("pepe");
        return res.data})
    
    
}

const add = (noteobject) => {
    console.log("mi objeto es" , noteobject)

    const request = axios.post('http://localhost:3001/numbers', noteobject)
    return request.then(res => res.data).catch(err => console.error(err))
}


const deleteNote = (id) => {
    console.log("borrando", id)
    const request = axios.delete('http://localhost:3001/numbers/' + id)
    return request.then(res => console.log(res.data)).catch(error => console.log(error))

}


const putNote = (noteobject) => {
    console.log("sustituyendo el teléfono ", noteobject.numer)
    const request = axios.put('http://localhost:3001/numbers/' + noteobject.id, noteobject)
    return request.then(res => console.log(res.data)).catch(error => console.log(error))

}

export default {getAll, add, deleteNote, putNote}