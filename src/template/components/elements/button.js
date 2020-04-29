import React, { useContext } from 'react'
import TemplateContext from '../../../context/templateContext';
function Button(props) {
  const [data, setData] = useContext(TemplateContext);
  return (
    <div className="card">
      <label>name : </label>
      <button
        tag={props.tag}
        className="btn"
        name="name"
        onClick={props.handleChange(setData)}
      />
    </div>
  )
}

export default Button;