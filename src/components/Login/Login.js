import React from 'react'
import styles from"./login.module.css"
import InputControl from '../InputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useState } from 'react'
import {  signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {

  const navigate =useNavigate();
  const [values,setValues]= useState({
  email:"",
  pass:"",
 });
const [errorMsg,setErrorMsg]=useState("")
const[submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
 const handleSubmission=()=>{
  if( !values.email || !values.pass){
    setErrorMsg("Set all fields");
    return;
  }
  setErrorMsg("");

  setSubmitButtonDisabled(true);

  signInWithEmailAndPassword(auth, values.email, values.pass)
  .then(async (res)=>{
    setSubmitButtonDisabled(false);
    
    navigate("/")

    })
    .catch((error)=>{
      setSubmitButtonDisabled(false)
    setErrorMsg(error.message)
  })
 }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>
        
        <InputControl type="email" label="Email " onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}placeholder="Enter email address"/>
  
        <InputControl type="password" label="Password " onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}placeholder="Enter password "/>
       

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
          <p>
            Don't have an account?{" "}
            <span>
            <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
        </div>
    </div>
  )
}

export default Login
