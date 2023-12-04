import React, { useState } from 'react'
import styles from "../Login/login.module.css"
import InputControl from '../InputControl/InputControl'
import { Link, useNavigate } from 'react-router-dom'
import{  createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
import { auth } from "../../firebase"

const Signup = (props) => {
 const navigate =useNavigate();
  const [values,setValues]= useState({name:"",
  email:"",
  pass:"",
 });
const [errorMsg,setErrorMsg]=useState("")
const[submitButtonDisabled,setSubmitButtonDisabled]=useState(false);
 const handleSubmission=()=>{
  if(!values.name || !values.email || !values.pass){
    setErrorMsg("Set all fields");
    return;
  }
  setErrorMsg("");

  setSubmitButtonDisabled(true);

  createUserWithEmailAndPassword(auth, values.email, values.pass)
  .then(async (res)=>{
    setSubmitButtonDisabled(false);
    const user=res.user;
    await updateProfile(user,{displayName:values.name});
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
            <h1 className={styles.heading}>Signup</h1>
        
        <InputControl type="text" label="Name " onChange={(e)=>{
          setValues((prev)=>({
            ...prev, name: e.target.value
          }))
        }}placeholder="Enter your name"/>
  
        <InputControl type="email" label="Email " onChange={(e)=>{
          setValues((prev)=>({
            ...prev, email: e.target.value
          }))
        }}placeholder="Enter email address"/>
  
        <InputControl type="password" label="Password " onChange={(e)=>{
          setValues((prev)=>({
            ...prev, pass: e.target.value
          }))
        }}placeholder="Enter password "/>
       

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>Signup</button>
          <p>
            Already have an account?{" "}
            <span>
            <Link to="/Login">Login</Link>
            </span>
          </p>
        </div>
        </div>
    </div>
  )
}

export default Signup
