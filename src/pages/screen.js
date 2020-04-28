import React, { useState, useEffect } from 'react';
import { of, interval } from 'rxjs'
import { map } from 'rxjs/operators'
import TFactory from '../factory/TFactory'
import S from '../template/screens';

const templateData$ = of([])
const delaytime = 100;
const initialState = {
  template: '',
  templateData: templateData$
}
const getObservables = (val) => {
  return interval(delaytime).pipe(map(i => S[val].items.slice(0, i + 1))) 
}
const getObservablesWithitems = (items) => {
  return interval(delaytime).pipe(map(i => items.slice(0, i + 1))) 
}
function Screen(props) {
  // console.log('screen props')
  // console.log(props.templateData.id)
  const [state, setState] = useState(
    props.templateData ? 
    {...initialState, templete: Object.keys(props.templateData)[0],templateData: getObservables(props.templateData.id)} : 
    initialState
    );
  // const handleChange = S['handleChange'];
  useEffect(() => {
    console.log('screen useEffect')
    console.log(state.template)
  })
  // const options = Object.keys(S);

  // const renderOptions = (options) => options.map((option,i) => <option value={option} key={i}>{option}</option>);
  // const handleChange = (ev) => {
  //   const val = ev.target.value;
  //   setState({
  //   [ev.target.name]: val,
  //   templateData: getObservables(val)
  // })}

  return (
    <div className="Main">
      {/* <h1>RxJS with React</h1> */}
      {/* <TFactory /> */}
      {/* <select 
        className="custom-select" 
        style= {{width:"200px"}} 
        name="template" 
        value={state['template']} 
        onChange={handleChange}>
        <option disabled hidden value=''></option>
        {renderOptions(options)}
      </select> */}
 
      <TFactory templateData={ getObservables(props.templateData.id)} />
      <div hidden={!props.isLast}> 마지막 페이지 </div>
      <div hidden={!props.isFirst}> 첫번째 페이지</div>
    </div>
  );
}

export default Screen;
