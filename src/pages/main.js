import React, {useState, useEffect, createContext} from 'react';
import _ from 'lodash';
import {useHistory, Link, Switch, Route} from 'react-router-dom';
import * as W from '../template/workflows';
import Screen from './screen';
import '../css/style.css';
import TemplateContext from '../context/templateContext';
import TemplateViewer from './templateViewer';
import Definition from './definition';
import Status from './status';
import Nodes from './node';
const log = (l) => console.log(l);

const initialCtx = {
  sceneNum: 0,
  isFirst: true,
  isLast: false,
  data: {},
  W: W.workflow
};
const Main = (props) => {
  const [ctx, setCtx] = useState(initialCtx);
  const history = useHistory();
  const {sceneNum, isFirst, isLast} = ctx;
  // child use it's own setState for render itself , ctxHook only get the child's data without rerendering whole page.
  // so I don't use setCtx but copy new data array from ctx.data + child data, no mutation of course.
  const ctxHook = [ctx.data, (v) => _(v).map(o => ctx.data = {...ctx.data, ...o}).map(log).value()];
  // console.log(ctx.W)

  const onClickBefore = () => {
    console.log('before')
    history.push(sceneNum)
    sceneNum !== 0 ? setCtx({...ctx, sceneNum: sceneNum - 1, isFist: false}) : setCtx({...ctx, isFirst: true})
    console.log(history)
  }
  const onClickNext = () => {
    console.log('next')
    sceneNum < ctx.W.length-1 ? setCtx({...ctx, sceneNum: sceneNum + 1, isLast: false}) : setCtx({...ctx, isLast: true})
    history.push(sceneNum)
    console.log(history)
  }
  const currentScene = ctx.W[sceneNum].scene;
  return (
    <TemplateContext.Provider value={ctxHook}>
      <h1 className="title">workflow</h1><br/><br/><hr/><br/>
      <Link to="/">Home</Link>
      <span> </span>
      <Link to="/template">template</Link>
      <span> </span>
      <Link to="/definition">Define the template</Link>
      <span> </span>
      <Link to="/status">Current Status</Link>
      <span> </span>
      <Link to="/nodes"> Nodes </Link>
      <Switch>
        <Route path="/status">
          <Status />
        </Route>
        <Route path="/template">
          <TemplateViewer />
        </Route>
        <Route path="/definition">
          <Definition />
        </Route>
        <Route path="/nodes">
          <Nodes />
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