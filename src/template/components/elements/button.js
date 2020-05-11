import React, { useContext } from 'react'
import TemplateContext from '../../../context/templateContext';
import useHandlers from '../../../custom-hooks/useHandlers';
function Button(props) {
  const [data, setData] = useContext(TemplateContext);
  const handlerHook = useHandlers('onClick')
  return (
    <div className="card">
      <button
        tag={props.tag}
        className="btn"
        name="name"
        onClick={handlerHook('button clicked')}
      > click
      </button>
    </div>
  )
}

export default Button;