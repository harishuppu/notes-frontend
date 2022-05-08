import React from "react";
// import {useContext, useEffect} from 'react';
// import noteContext from '../context/notes/noteContext';
function About() {
  return (
    <div className="container my-3">
     <div className="tite my-2">
     <h1>About NotesOnline</h1>
     </div>
      <div className="body my-2" >
        <div className="aboutbdy" style={{}}>
        <div className="card" style={{width:"75vw"}}>
          <div className="card-body my-2">NotesOnline is a digital notebook that helps you study and a website where you can save your writings and thoughts in cloud .
          This website is mainly made to save the notes in cloud and be able to access form anywhere in the world.
          NotesOnline Note-taking software is designed with learners, trainers, and educators in mind. Its a free online study tool that makes it easier than ever to record and organise your ideas
          Here you can save your notes in our well secured website and no one except you can be able to view or alter your notes content.
          </div>
        </div>
        </div>
        <h1>About Developer</h1>
        <div className="card my-2" style={{width:"75vw"}}>
          <div className="card-body ">
            For further help or any assistance regarding the NotesOnline please contact the Developer <> </> 
            <a href="https://github.com/harishuppu?tab=repositories">Harish</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
