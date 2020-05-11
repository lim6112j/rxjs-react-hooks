const handleChangeFunc = (fn, childSetStateFn) => (ev) => {
  const evtarget = ev.target;
  const obj = {};
  const key = evtarget.getAttribute('tag');
  obj[key] = {
    value: evtarget.value,
    type: evtarget.type
    };
  fn({obj});
  childSetStateFn(evtarget.value);
};

export default handleChangeFunc;