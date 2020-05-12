import React, { useState, useEffect } from 'react';
import { of, interval, Scheduler, animationFrameScheduler, observable, BehaviorSubject } from 'rxjs';
import { map, tap, switchMap, takeWhile, distinctUntilChanged, distinct, mapTo, reduce, scan} from 'rxjs/operators';
import util from 'util'
import objToStr from '../utils/objToStrHelper';
import * as W from '../template/definitions';
const delay = 0;
const DURATION = 1000
const log =(msg) => (v) => console.log(msg, " => ", v);
const start = animationFrameScheduler.now();
const templateSubject$ = new BehaviorSubject(W.workflow);

const renderInner = (items) => items.map(item => (
  <>
  <h3 style={{color : item.userDefined ? "" : "red"}}>key: {item.key} - type: {item.type} - {objToStr(item.userDefined)}</h3>
  </>
))
const renderItems = (items) => items.map((item, i) => (
  <div key={i}>
  <h3>{item.scene.id || 'no id'} - {item.scene.description || 'no description'}</h3>
  {/* <h3>{renderInner(item.scene.items)}</h3> */}
  </div>
  )
);
const useObservable = function (observable$) {
  const [state, setState] = useState([]);
  useEffect(() => {
    const subs = observable$.subscribe(setState);
    return () => subs.unsubscribe();
  }, [observable$]);
  return state;
}
const Definition = () => {

  const state = useObservable(templateSubject$);
  return (
  <ul> {renderItems(state)} </ul>
)}

export default Definition;