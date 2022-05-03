import {useState } from 'react';
import React from 'react';
import { useNavigate } from "react-router-dom"
import Loader from "./Loading"


const Login = () => {
  const [lod, setlod] = useState(false);
    const navigate = useNavigate();
        const [cred, setCred] = useState({email: "",password:""})
    const handleSubmit= async (e)=>{
        e.preventDefault();
          setlod(true);
        const response = await fetch("https://arcane-ocean-89301.herokuapp.com/api/auth/login", {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
          body: JSON.stringify({email: cred.email,password:cred.password}) 
          });
          const json= await response.json();
        console.log(json)
        setlod(false);
        if(json.success){// save token and redirect
            localStorage.setItem('token',json.authtoken);
            navigate("/");
        }
        else{
            alert("Invalid Credentials")
        }
    }

    const onChange = (e) =>{
        setCred({...cred,[e.target.name]: e.target.value})
    }
  return (
    <>
     {lod? <Loader/> :<div className='container'>
       <form onSubmit={handleSubmit}>
  <div className="form-group my-2">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter Your Email" value={cred.email} onChange={onChange}  />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-2">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Your Password" value={cred.password}  onChange={onChange} />
  </div>
  <button type="submit" className="btn btn-outline-primary" >Submit</button>
</form>
    </div>}
    </>
  )
}

export default Login