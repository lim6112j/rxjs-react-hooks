import React, {useState, useEffect} from 'react';
const initialState = {
  x: 0,
  y: 0,
  mouseStart: false,
  mouseMove: false,
  mouseEnd: true
}
const useMousePos = (targetId) => {
  const [pos, setPos] = useState(initialState);
  const mouseDown = () => {
    setPos({...pos, mouseStart: true, mouseMove: false, mouseEnd: false})
  }
  const mouseMove = (ev) => {
    // console.log(ev)
    if(pos.mouseStart){
      setPos({...pos, x: pos.x + ev.movementX, y: pos.y + ev.movementY})
    }
  }
  const mouseUp = () => {
    setPos({...pos, mouseStart: false, mouseMove: false, mouseEnd: true})
  }
  useEffect(() => {
    const targetEle = targetId ? document.getElementById(targetId) : window;
    targetEle.addEventListener('mousemove', mouseMove);
    targetEle.addEventListener('mouseup', mouseUp);
    targetEle.addEventListener('mousedown', mouseDown);
    return () => {
      targetEle.removeEventListener('mousemove', mouseMove);
      targetEle.removeEventListener('mouseup', mouseUp);
      targetEle.removeEventListener('mousedown', mouseDown);   
    }
  })
  return pos;
}
const Nodes = (props) => {
  const [state, setState] = useState(initialState);
  const pos = useMousePos("movediv");
  return <div id="movediv" style={{...styles.box, transform: `translate(${pos.x}px, ${pos.y}px)`}}> hello nodes</div>
}
const styles = {
  box: { borderStyle: "dotted", height: 100, width: 100}
}
export default Nodes;