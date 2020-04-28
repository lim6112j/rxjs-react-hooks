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

function Screen(props) {
  const [state, setState] = useState(
    props.templateData ? 
    {...initialState, templete: props.templateData.id, templateData: getObservables(props.templateData.id)} : 
    initialState
    );
  const handleChange = props.templateData.handleChange;
  useEffect(() => {
    console.log('screen useEffect')
    console.log(state.template)
  })

  return (
    <div className="Main">
      <TFactory templateData={ getObservables(props.templateData.id)} handleChange={handleChange}/>
      <div hidden={!props.isLast}> 마지막 페이지 </div>
      <div hidden={!props.isFirst}> 첫번째 페이지</div>
    </div>
  );
}

export default Screen;
