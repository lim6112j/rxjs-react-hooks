import React, { useContext, useState, useEffect } from 'react';
import _ from 'lodash';
import TemplateContext from '../../../context/templateContext';
import useHandlers from '../../../custom-hooks/useHandlers';
function TextArea(props) {
  const [data, setData] = useContext(TemplateContext);
  const [state, setState] = useState('');
  const content = props && props.userDefined && props.userDefined.text || 'fill the tempate data';
  const handlerHook = useHandlers('onChange');
  useEffect(() => {
    const refresh = _.map(data, (v, k) => k === props.tag ? setState(v.value) : null)
  }, [data, props.tag])
  return (
    <div className="card">
      <h1>{content}</h1>
      <br/>
      <textarea 
        tag={props.tag}
        className="feature-box"
        value={state}
        onChange={handlerHook(setData, setState)}
      >
      </textarea>
    </div>
  )
}

export default TextArea;