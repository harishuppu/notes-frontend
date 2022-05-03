import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext";



const Notesadd = () => {

  const [note, setNote] = useState({title:"",description:"",tag:""})
  const context = useContext(noteContext);
  const {addNote} = context;
const handleClick = (event) =>{
  event.preventDefault()
addNote(note.title,note.description,note.tag)
setNote({title:"",description:"",tag:""});

}

const onChange = (e) =>{
setNote({...note, [e.target.name]:e.target.value})
}

  return (
    
    <div className="container my-3">
    <h2>Add Note</h2>
    <div className="one">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title </label>
          <input type="text" placeholder='Enter Title' className="form-control" name="title" id="title" aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea placeholder='Enter The description' style={{height:"200px"}} type="text" className="form-control" name="description" id="description" value={note.description} onChange={onChange}  />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" placeholder='Provide a tag ( Optinal )' className="form-control" name="tag" id="tag" onChange={onChange} value={note.tag}/>
        </div>
       
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Notesadd