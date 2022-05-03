import React, { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Notesadd from "./Notesadd";
import Loading from "./Loading";

function Notes(props) {
  const [isedit, setisedit] = useState("false");
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, editNote, setNotes } = context;
  const [lload, setlload] = useState(true);
  useEffect(() => {

    
    const host="https://arcane-ocean-89301.herokuapp.com/";
    const getNotes= async () =>{
      //api call
      setlload(true);
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });


      //logic
      const json= await response.json()
      console.log(json);
      setNotes(json);
      setlload(false);
      //console.log(lload);
    }

    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const ref = useRef(null);
  const refclose = useRef(null);

  const sty = {
    width: "100vw",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
  };

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "Default",
  });

  const handleClick = (event) => {
    event.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    console.log("updating note", note);
    refclose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Notesadd />
      {/* //modal begins */}

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Note
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="etitle"
                    id="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    style={{ height: "200px" }}
                    type="text"
                    className="form-control"
                    value={note.edescription}
                    name="edescription"
                    id="edescription"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={note.etag}
                    name="etag"
                    id="etag"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refclose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className={`btn btn-primary ${isedit === "false" ? "d-none" : ""
                  }`}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal ends */}

      <div
        className="heading_yournotes"
        style={{
          marginLeft: "2%",
        }}
      >
        <h3>Your Notes</h3>
      </div>
     {lload ? <Loading/>:
     <div className="container justify-content-start" style={sty}>
     {notes.length === 0 && "No notes to display"}
     {notes.map((note) => (
       <Noteitem
         updateNote={updateNote}
         setisedit={setisedit}
         key={note._id}
         note={note}
       />
     ))}
   </div>}
      
    </>
  );
}

export default Notes;
