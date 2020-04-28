import React from 'react';

function TextArea(props) {
  return (
    <>
      <div className="card">
        <label>textArea</label>
        <textarea 
          tag={props.tag}
          className="feature-box"
          onChange={props.handleChange}
        >
        </textarea>
      </div>
    </>
  )
}

export default TextArea;