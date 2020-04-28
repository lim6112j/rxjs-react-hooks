import React, { useContext } from 'react';
import TemplateContext from '../../../context/templateContext';
function TextArea(props) {
  const [data, setData] = useContext(TemplateContext);
  return (
    <>
      <div className="card">
        <label>textArea</label>
        <textarea 
          tag={props.tag}
          className="feature-box"
          onChange={props.handleChange(setData)}
        >
        </textarea>
      </div>
    </>
  )
}

export default TextArea;