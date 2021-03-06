import React, {useState, useEffect, cloneElement, Fragment} from 'react'
import { components } from '../template/components'
const isOwner = true;
const log = (msg, item) => (v) => console.log(msg, " => ", item && item.key ? item.key : '');
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
      {isOwner ? <button className="btn" onClick={log('click', item)}>Edit</button> : null}
      {cloneElement(components[item.type], {tag: item.key, userDefined: item.userDefined})}
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