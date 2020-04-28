import React, {useState, useEffect, createContext} from 'react';
import _ from 'lodash';
import {useHistory} from 'react-router-dom';
import * as W from '../template/workflows';
import Screen from './screen';
import '../css/style.css';
import TemplateContext from '../context/templateContext';
const log = (l) => console.log(l);
let data = {};
const initialState = {
  sceneNum: 0,
  isFirst: true,
  isLast: false,
  data: {}
};
const Main = (props) => {
  // console.log(W.workflow)
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const {sceneNum, isFirst, isLast} = state;
  const ctxHook = [data, (v) => _(v).map(o => data = ({...data, ...o})).map(log).value()];

  useEffect(
    () => {
      console.log(props);
    },
    [props]
  )
  const onClickBefore = () => {
    console.log('before')
    setState({...state.data, data})
    history.push(sceneNum)
    sceneNum !== 0 ? setState({sceneNum: sceneNum - 1, isFist: false}) : setState({...state, isFirst: true})
    console.log(history)
  }
  const onClickNext = () => {
    console.log('next')
    setState({...state.data, data})
    sceneNum < W.workflow.length-1 ? setState({sceneNum: sceneNum + 1, isLast: false}) : setState({...state, isLast: true})
    history.push(sceneNum)
    console.log(history)
  }

  const currentScene = W.workflow[sceneNum].scene;
  return (
    <TemplateContext.Provider value={ctxHook}>
      <h1 className="title">workflow</h1>
      <br/><br/>
      <hr/>
      <br/>
      <div className="center">
        <button className="btn" onClick={onClickBefore}>before</button>
        <button className="btn" onClick={onClickNext}>next</button>
      </div>
      <Screen templateData={currentScene} isLast={isLast} isFirst={isFirst}/>
    </TemplateContext.Provider>
  )
}

export default Main;