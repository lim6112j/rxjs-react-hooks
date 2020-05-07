import React, { useContext, useState } from 'react';
import TemplateContext from '../../../context/templateContext';
function Select(props) {
  const [data, setData] = useContext(TemplateContext);
  const [state, setState] =useState('');
  const hasOptions = props && props.userDefined && props.userDefined.options;
  const hasText = props && props.userDefined && props.userDefined.text;
  const options = hasOptions || ['fill', 'the', 'template'];
  const renderItems = (items) => items.map(item => <option>{item}</option>)
  const content = hasText || 'fill the tempate data';
  return (
    <div className="card">
      <h1 style={{color : hasText ? "" : "red"}}>{content}</h1>
      <select
        className="select"
        tag={props.tag}
        value={state}
        onChange={props.handleChange(setData, setState)}
      >
        {renderItems(options)}
      </select>
    </div>
  )
}

export default Select;