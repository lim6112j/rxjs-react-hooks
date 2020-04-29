import React, { useContext } from 'react';
import TemplateContext from '../../../context/templateContext';
function Select(props) {
  const [data, setData] = useContext(TemplateContext);
  const options = props && props.userDefined && props.userDefined.options || ['fill', 'the', 'template'];
  const renderItems = (items) => items.map(item => <option>{item}</option>)
  return (
    <div className="card">
      <select
        className="select"
        tag={props.tag}
        onChange={props.handleChange(setData)}
      >
        {renderItems(options)}
      </select>
    </div>
  )
}

export default Select;