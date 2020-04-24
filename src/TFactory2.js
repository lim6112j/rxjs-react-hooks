import React, {useState, useEffect} from 'react'
const components = {
  A: <div> component - div </div>,
  B: <div> component - text </div>,
  C: <div> component - card </div>,
  D: <button> component - button </button>
}
const useObservable = (observable) => {
  const [state, setState] = useState()
  useEffect(() => {
    const subs = observable.subscribe(setState)
    return () => subs.unsubscribe()
  }, [observable])
  return state
}
const renderItem = (item) => components[item.type]
const renderItems = (items) => items.map(renderItem)

const TFactory2 = (props) => {
  let items = useObservable(props.templateData) || ['placeholder']
  return (
    <div>{renderItems(items)}</div>
  )
}

export default TFactory2