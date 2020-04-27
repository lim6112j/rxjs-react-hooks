import React, {useState, useEffect, cloneElement} from 'react'
import { components } from './template/components'

const useObservable = (observable) => {
  const [state, setState] = useState()
  useEffect(() => {
    const subs = observable.subscribe(setState)
    return () => subs.unsubscribe()
  }, [observable])
  return state
}
const renderItem = (item) => {
  const ele = components[item.type] ? cloneElement(components[item.type], [{key:item.key}]) : null;
  return ele;
}
const renderItems = (items) => items.map(renderItem)

const TFactory2 = (props) => {
  let items = useObservable(props.templateData) || ['placeholder']
  return (
    <div>{renderItems(items)}</div>
  )
}

export default TFactory2