import React from 'react';

const Radio = (props) => {
  const hasOptions = props && props.userDefined && props.userDefined.options;
  const hasText = props && props.userDefined && props.userDefined.text;
  const content = props && props.userDefined && props.userDefined.text || 'fill the tempate data';
  const options = hasOptions || ['fill', 'the', 'template'];
  const renderItems = (items) => items.map((item, i) => (
    <div className="radio">
    <label>
      <input type="radio" value={item} checked={i ===0 ? true : false} />
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