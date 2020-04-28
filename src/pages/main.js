import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import rd3 from 'react-d3-library';
import * as W from '../template/workflows';
import Screen from './screen';
import '../css/style.css';
const initialState = {
  sceneNum: 0,
  isFirst: true,
  isLast: false
};
const Main = () => {
  // console.log(W.workflow)
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const {sceneNum, isFirst, isLast} = state;
  // rd3.select("body").style("background-color", "black");
  useEffect(() => console.log(state))
  const onClickBefore = () => {
    console.log('before')
    history.push(sceneNum)
    sceneNum !== 0 ? setState({sceneNum: sceneNum - 1, isFist: false}) : setState({...state, isFirst: true})
    console.log(history)
  }
  const onClickNext = () => {
    console.log('next')
    sceneNum < W.workflow.length-1 ? setState({sceneNum: sceneNum + 1, isLast: false}) : setState({...state, isLast: true})
    history.push(sceneNum)
    console.log(history)
  }
  const currentScene = W.workflow[sceneNum].scene;
  return (
    <>
    <h1 className="title">workflow</h1>
    <br/><br/>
    <hr/>
    <br/>
    <div className="center">
      <button className="btn" onClick={onClickBefore}>before</button>
      <button className="btn" onClick={onClickNext}>next</button>
    </div>
    <Screen templateData={currentScene} isLast={isLast} isFirst={isFirst}/>
    </>
  )
}

export default Main;