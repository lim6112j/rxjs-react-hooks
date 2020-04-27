import React, { useState, useEffect } from 'react';
import { of, interval } from 'rxjs'
import { map } from 'rxjs/operators'
import TFactory from './TFactory'
import TFactory2 from './TFactory2'
import * as W from './template/screens';
import './css/index.css';
const templateData$ = of([])
const initialState = {
  template: '',
  templateData: templateData$
}
function App() {
  const [state, setState] = useState(initialState);
  useEffect(() => console.log(state.template))
  const options = Object.keys(W)
  const renderOptions = (options) => options.map((option,i) => <option value={option} key={i}>{option}</option>);
  const handleChange = (ev) => {
    const val = ev.target.value;
    setState({
    [ev.target.name]: val,
    templateData: interval(1000).pipe(map(i => W[val].items.slice(0, i + 1)))
  })}
  return (
    <div className="App">
      <h1>RxJS with React</h1>
      {/* <TFactory /> */}
      <select 
        className="custom-select" 
        style= {{width:"200px"}} 
        name="template" 
        value={state['template']} 
        onChange={handleChange}>
        <option disabled hidden value=''></option>
        {renderOptions(options)}
      </select>
      <hr/>
      <TFactory2 templateData={state.templateData}/>
    </div>
  );
}

export default App;
