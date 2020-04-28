import React, { useContext } from 'react'
import TemplateContext from '../../../context/templateContext';
function Input(props) {
  const [data, setData] = useContext(TemplateContext);
  return (
    <>
    <div className="card">
      <label>name : </label>
      <input 
        tag={props.tag}
        className="composition" 
        name="name" 
        onChange={props.handleChange(setData)}
      />
    </div>
  </>
  )
}

export default Input;