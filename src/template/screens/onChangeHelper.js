const handleChangeFunc = (fn) => (ev) => {
  const evtarget = ev.target;
  const obj = {};
  const key = evtarget.getAttribute('tag');
  obj[key] = {
    value: evtarget.value,
    type: evtarget.type
    };
  fn({obj});
};

export default handleChangeFunc;