import React, {useState, useEffect} from 'react';
const initialState = {
  x: 0,
  y: 0,
  mouseStart: false,
  mouseMove: false,
  mouseEnd: true
}

const Nodes = (props) => {
  const [state, setState] = useState(initialState);
  const mouseDown = () => {
    setState({...state, mouseStart: true, mouseMove: false, mouseEnd: false})
  }
  const mouseMove = (ev) => {
    // console.log(ev)
    if(state.mouseStart){
      setState({...state, x: state.x + ev.movementX, y: state.y + ev.movementY})
    }
  }
  const mouseUp = () => {
    setState({...state, mouseStart: false, mouseMove: false, mouseEnd: true})
  }
  return <div style={{...styles.box, transform: `translate(${state.x}px, ${state.y}px)`}} onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseUp={mouseUp}> hello nodes</div>
}
const styles = {
  box: { borderStyle: "dotted", height: 100, width: 100}
}
export default Nodes;