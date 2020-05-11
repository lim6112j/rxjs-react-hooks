import React, { useContext, useState, useEffect } from 'react'
import _ from 'lodash';
import useHandlers from '../../../custom-hooks/useHandlers';
import TemplateContext from '../../../context/templateContext';
function Input(props) {
  const [data, setData] = useContext(TemplateContext);
  const [state, setState] = useState('');
  const hasData = props && props.userDefined && props.userDefined.text;
  const content =  hasData || 'fill the tempate data';
  const handlerHook = useHandlers('onChange');
  useEffect(() => {
    const refresh = _.map(data, (v, k) => k === props.tag ? setState(v.value) : null)
  }, [data, props.tag]);
  return (
    <div className="card">
      <h1 style={{color : hasData ? "" : "red"}}>{content}</h1>
      <input 
        tag={props.tag}
        className="composition"
        name="name" 
        value={state}
        onChange={handlerHook(setData, setState)}
      />
    </div>
  )
}

export default Input;