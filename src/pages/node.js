import React, {useState, useEffect} from 'react';
import useMousePos from './custom-hooks/useMousePos';
const Nodes = (props) => {
  const pos = useMousePos("movediv");
  return <div id="movediv" style={{...styles.box, transform: `translate(${pos.x}px, ${pos.y}px)`}}> hello nodes</div>
}
const styles = {
  box: { borderStyle: "dotted", height: 100, width: 100}
}
export default Nodes;