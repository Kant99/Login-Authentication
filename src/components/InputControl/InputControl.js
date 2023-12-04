import React from 'react'

const InputControl = (props) => {
  return (
    <div className='container'>
      {props.label && <label>{props.label}</label>}
      <input type={props.type} {...props}/>
    </div>
  )
}

export default InputControl
