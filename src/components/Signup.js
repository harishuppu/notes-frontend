import {useState } from 'react';
import React from 'react';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from "react-router-dom"
import Loader from "./Loading"

const Signup = () => {
    const navigate = useNavigate();
    const [lod, setlod] = useState(false);

    const [cred, setCred] = useState({name:"",email: "",password:"",cpassword:""})

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setlod(true);
        const  {name, email, password } = cred;
        const response = await fetch("https://arcane-ocean-89301.herokuapp.com/api/auth/createuser", {
          
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({name,email,password}) 
          });
          const json= await response.json();
        console.log(json)
       // save token and redirect
       setlod(false);
       if(json.success){
        localStorage.setItem('token',json.authtoken);
        navigate("/");
       }
       else{
           alert("Email already exists");
       }
           
        
        
    }

    const onChange = (e) =>{
        setCred({...cred,[e.target.name]: e.target.value})
    }

  return (
    <>
   {lod? <Loader/> : <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"  onChange={onChange} placeholder="Enter Your Name" name="name"/>
  </div> 
  <div className="form-group my-2">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your email" onChange={onChange} name="email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-2">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Enter Your Password" onChange={onChange} name="password" minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>}
    </>
  )
}

export default Signup