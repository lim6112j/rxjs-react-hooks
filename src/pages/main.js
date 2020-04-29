import React, {useState, useEffect, createContext} from 'react';
import _ from 'lodash';
import {useHistory, Link, Switch, Route} from 'react-router-dom';
import * as W from '../template/workflows';
import Screen from './screen';
import '../css/style.css';
import TemplateContext from '../context/templateContext';
import TemplateViewer from './templateViewer';
const log = (l) => console.log(l);

const initialState = {
  sceneNum: 0,
  isFirst: true,
  isLast: false,
  data: {},
  W: W.workflow
};
const Main = (props) => {
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const {sceneNum, isFirst, isLast} = state;
  const ctxHook = [state.data, (v) => _(v).map(o => state.data = {...state.data, ...o}).map(log).value()];
  // console.log(state.W)
  useEffect(
    () => {
      console.log(props);
    },
    [props]
  )
  const onClickBefore = () => {
    console.log('before')
    history.push(sceneNum)
    sceneNum !== 0 ? setState({...state, sceneNum: sceneNum - 1, isFist: false}) : setState({...state, isFirst: true})
    console.log(history)
  }
  const onClickNext = () => {
    console.log('next')
    sceneNum < state.W.length-1 ? setState({...state, sceneNum: sceneNum + 1, isLast: false}) : setState({...state, isLast: true})
    history.push(sceneNum)
    console.log(history)
  }
  const currentScene = state.W[sceneNum].scene;
  return (
    <TemplateContext.Provider value={ctxHook}>
      <h1 className="title">workflow</h1><br/><br/><hr/><br/>
      <Link to="/">Home</Link>
      <span> </span>
      <Link to="/template">template</Link>
      <Switch>
        <Route path="/template">
          <TemplateViewer />
        </Route>
        <Route path="/">
          <div className="center">
            <button className="btn" onClick={onClickBefore}>before</button>
            <button className="btn" onClick={onClickNext}>next</button>
          </div>
          <Screen templateData={currentScene} isLast={isLast} isFirst={isFirst}/>
        </Route>
      </Switch>
    </TemplateContext.Provider>
  )
}

export default Main;