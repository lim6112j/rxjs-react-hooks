import React, {useState, useEffect} from 'react'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'
// const components = {
//   A: {id: 1, name: 'div', content: '<div> component - div </div>'},
//   B: {id: 2, name: 'text', content: '<div> component - text </div>'},
//   C: {id: 3, name: 'card', content: '<div> component - card </div>'},
//   D: {id: 4, name: 'button', content: '<div> component - button </div>'}
// }
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
const renderItems = (items) => items.map(item => components[item.type])

const TFactory2 = (props) => {
  let items = useObservable(props.templateData) || ['placeholder']
  return (
    <div>{renderItems(items)}</div>
  )
}

export default TFactory2