import {useState, useEffect} from 'react';

const useObservable = (observable$) => {
  const [state, setState] = useState('');
  useEffect( () => {
    const subscription = observable$.subscribe(v => setState(v));
    return () => subscription.unsubscribe();
  }, [observable$])
  return state;
}

export default useObservable;