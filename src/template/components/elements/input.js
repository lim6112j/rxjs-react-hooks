import React, { useContext } from 'react'
import TemplateContext from '../../../context/templateContext';
function Input(props) {
  const [data, setData] = useContext(TemplateContext);
  const hasData = props && props.userDefined && props.userDefined.text;
  const content =  hasData || 'fill the tempate data';
  return (
    <div className="card">
      <h1 style={{color : hasData ? "" : "red"}}>{content}</h1>
      <input 
        tag={props.tag}
        className="composition"
        name="name" 
        onChange={props.handleChange(setData)}
      />
    </div>
  )
}

export default Input;