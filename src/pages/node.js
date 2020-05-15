import React from 'react';
import {ajax} from 'rxjs/ajax';
import useMousePos from './custom-hooks/useMousePos';
import useObservable from './custom-hooks/useObservable';
const workflows$ = ajax(process.env.REACT_APP_WORKFLOW_URL);
const Node = (props) => {
  const pos = useMousePos();
  const workflows = useObservable(workflows$);
  return <div id={props.id} style={{...styles.box, transform: `translate(${pos.x}px, ${pos.y}px)`}}> {JSON.stringify(workflows)}</div>
}
const styles = {
  box: { borderStyle: "dotted", height: 100, width: 100}
}
export default Node;