import React, {useState, useEffect} from 'react'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'
const comps = [
  {id: 1, name: 'div', content: '<div> component - div </div>'},
  {id: 2, name: 'text', content: '<div> component - text </div>'},
  {id: 3, name: 'card', content: '<div> component - card </div>'},
  {id: 4, name: 'button', content: '<div> component - button </div>'}
]
const templateData = [
  {id: 1, name: 'workshop1', components: [1, 1, 1]},
  {id: 2, name: 'workshop2', components: [2, 1, 3], navigation: []},
  {id: 3, name: 'workshop3', components: [3, 3, 3], navigation: []}
]
const templateData$ = interval(1000).pipe(map(i => templateData.slice(0, i + 1)))
const useObservable = (observable) => {
  const [state, setState] = useState()
  useEffect(() => {
    const subs = observable.subscribe(setState)
    return () => subs.unsubscribe()
  }, [observable])
  return state
}
const renderItems = (items) => items.map(item => item.components)

const TFactory = () => {
  let items = useObservable(templateData$) || ['placeholder']
  return (
    <div>{renderItems(items)}</div>
  )
}

export default TFactory