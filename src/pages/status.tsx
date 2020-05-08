import React, { useContext } from 'react';
import _ from 'lodash';
import TemplateContext from '../context/templateContext';
const log = (l:any) => console.log(l);
const Status = () => {
  const [data, setData] = useContext(TemplateContext);
const renderContext = (ctx:any) => {
  return _.map(ctx, (v, k) => <h3>{k} : {JSON.stringify(v)}</h3>);
  // return <h3>{JSON.stringify(ctx)}</h3>
}
  return (
    <>
    <h1>status</h1>
    {renderContext(data)}
    </>
  );
}

export default Status;