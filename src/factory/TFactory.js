import React, {useState, useEffect, cloneElement, Fragment, useContext} from 'react'
import { components } from '../template/components'
import TemplateContext from '../context/templateContext';
const useObservable = (observable) => {
  const [state, setState] = useState()
  useEffect(() => {
    const subs = observable.subscribe(setState)
    return () => subs.unsubscribe()
  }, [observable])
  return state
}
const renderItem = (props) => (item) => item.key ? 
  (
    <Fragment key={item.key}>
      {React.cloneElement(components[item.type], {handleChange: props.handleChange, tag: item.key})}
    </Fragment>
  )
  :
  null;
const renderItems = (props, items) => items.map(renderItem(props))

const TFactory = (props) => {
  let items = useObservable(props.templateData) || ['placeholder']
  return (
    <div>{renderItems(props, items)}</div>
  )
}

export default TFactory