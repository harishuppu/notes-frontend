import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import './Noteitem.css'

function Noteitem(props) {  
  const { note ,updateNote} = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  
  return (
    <div className="main_card" style={{ width: "380px", height: "120px", margin: "20px" }}>
      <div className="card " id="hoverid" >
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title "> {note.title.substring(0, 20)}..</h5>
           <div className="d">
             <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{props.setisedit("true"); updateNote(note)}}></i>
              <i className="fa-solid fa-trash " onClick={()=>{deleteNote(note._id)}}></i>
           </div>
          </div>
          <p className="card-text">{note.description.substring(0, 37)}...</p>
          <button className="btn btn-outline-primary btn-sm" onClick={()=>{props.setisedit("false"); updateNote(note)}}> View Note </button>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;

