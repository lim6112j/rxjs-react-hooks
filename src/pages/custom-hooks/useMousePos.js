import {useState, useEffect, useMemo} from 'react';
const initialState = {
  x: 0,
  y: 0,
  mouseStart: false,
  mouseMove: false,
  mouseEnd: true
}

const useMousePos = () => {
  const [pos, setPos] = useState(initialState);

  useEffect(() => {
    const mouseDown = (ev) => {
      // console.log(ev.target.parentNode.localName);
      if(ev.target.parentNode.localName === "div") {
        console.log(ev.target.id)
        setPos({...pos, mouseStart: true, mouseMove: false, mouseEnd: false, targetId: ev.target.id})
      }
    }
    const mouseMove = (ev) => {
      // console.log(ev)
      if(pos.mouseStart){
        setPos({...pos, x: pos.x + ev.movementX, y: pos.y + ev.movementY})
      }
    }
    const mouseUp = (ev) => {
      setPos({...pos, mouseStart: false, mouseMove: false, mouseEnd: true, targetId: null})
    }
    const targetEle = pos.targetId ? document.getElementById(pos.targetId) : window;
    targetEle.addEventListener('mousemove', mouseMove);
    targetEle.addEventListener('mouseup', mouseUp);
    targetEle.addEventListener('mousedown', mouseDown);
    return () => {
      targetEle.removeEventListener('mousemove', mouseMove);
      targetEle.removeEventListener('mouseup', mouseUp);
      targetEle.removeEventListener('mousedown', mouseDown);   
    }
  },[pos])
  return pos;
}

export default useMousePos;