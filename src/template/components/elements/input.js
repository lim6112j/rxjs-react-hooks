import React from 'react'

function Input(props) {
  return (
    <>
    <div className="card">
      <label>name : </label>
      <input 
        className="composition" 
        name="name" 
        onChange={props.handleChange}
      />
    </div>
  </>
  )
}

export default Input;