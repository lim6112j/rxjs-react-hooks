import React, { useContext } from 'react';
import TemplateContext from '../../../context/templateContext';
function TextArea(props) {
  const [data, setData] = useContext(TemplateContext);
  const content = props && props.userDefined && props.userDefined.text || 'fill the tempate data';
  return (
    <div className="card">
      <h1>{content}</h1>
      <br/>
      <textarea 
        tag={props.tag}
        className="feature-box"
        // value={data}
        onChange={props.handleChange(setData)}
      >
      </textarea>
    </div>
  )
}

export default TextArea;