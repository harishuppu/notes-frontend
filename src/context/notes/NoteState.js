import NoteContext  from "./noteContext";
import {useState} from 'react';
const NoteState = (props) =>{
  
  const host="https://arcane-ocean-89301.herokuapp.com/";
    const notesInitial=[];


        // get all Notes
        

      // add Note
      const addNote = async (title,description,tag) =>{
        //api call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
         
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}) 
        });
            const note= await response.json();
            setNotes([note].concat(notes));

        //logic
       
        
      }
      // deletenote

      const deleteNote = async (id) =>{
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
        });
        const json= await response.json();
        console.log(json);
        //logic
        const newNotes =notes.filter((note)=>{ return note._id!==id});
        setNotes(newNotes)
      }


      // edit note
      const editNote = async (id,title,description,tag) =>{
        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          
          headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,tag}) 
        });
        const json= await response.json();
        //logic
        let newNotes= JSON.parse(JSON.stringify(notes))
          for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id===id){
              newNotes[index].title=title;
              newNotes[index].description=description;
              newNotes[index].tag=tag;
              break;
            }
           
          }
          setNotes(newNotes)
      }



      const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState; 




