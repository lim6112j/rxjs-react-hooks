import React, {useContext, useState} from 'react';
import TemplateContext from '../../../context/templateContext';
const Radio = (props) => {
  const [data, setData] = useContext(TemplateContext);
  const [state, setState] = useState('');
  const hasOptions = props && props.userDefined && props.userDefined.options;
  const hasText = props && props.userDefined && props.userDefined.text;
  const content = props && props.userDefined && props.userDefined.text || 'fill the tempate data';
  const options = hasOptions || ['fill', 'the', 'template'];
  const renderItems = (items) => items.map((item, i) => (
    <div className="radio">
    <label>
      <input 
        tag={props.tag}
        type="radio" 
        value={item}  
        onChange={props.handleChange(setData, setState)}
        />
      {item}
    </label>
    </div>
  ))
  return (
    <div className="card">
      <h1 style={{color : hasText ? "" : "red"}}>{content}</h1>
      {renderItems(options)}
    </div>
  );
}

export default Radio;