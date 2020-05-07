import React, { useContext, useState } from 'react';
import TemplateContext from '../../../context/templateContext';
function TextArea(props) {
  const [data, setData] = useContext(TemplateContext);
  const [state, setState] = useState('');
  const content = props && props.userDefined && props.userDefined.text || 'fill the tempate data';
  return (
    <div className="card">
      <h1>{content}</h1>
      <br/>
      <textarea 
        tag={props.tag}
        className="feature-box"
        value={state}
        onChange={props.handleChange(setData, setState)}
      >
      </textarea>
    </div>
  )
}

export default TextArea;