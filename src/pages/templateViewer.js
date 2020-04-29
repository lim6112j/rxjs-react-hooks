import React, { useState, useEffect } from 'react';
import { of, interval, Scheduler, animationFrameScheduler } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import objToStr from '../utils/objToStrHelper';
import * as W from '../template/workflows';
const delay = 0;
const DURATION = 1000
const log = (v) => console.log(v);
const start = animationFrameScheduler.now();


const renderInner = (items) => items.map(item => (
  <>
  <h3 style={{color : item.userDefined ? "" : "red"}}>{item.key} - {objToStr(item.userDefined)}</h3>
  </>
))
const renderItems = (items) => items.map(item => (
  <>
  <li>{item.scene.id || 'no id'} - {item.scene.description || 'no description'}</li>
  <h3>{renderInner(item.scene.items)}</h3>
  </>
  )
);
const TemplateViewer = () => {
  const [state, setState] = useState([]);
  const workflows$ = interval(delay, animationFrameScheduler).pipe(
    map(() => (animationFrameScheduler.now()-start)/DURATION),
    map(i => W.workflow.slice(0, i + 1)),
    tap(log)
  );
  useEffect(() => {
    const subscription = workflows$.subscribe(setState);
    return () => subscription.unsubscribe();
  })
  return (
  <>
  <ul> {renderItems(state)} </ul>
  </>
)}

export default TemplateViewer;