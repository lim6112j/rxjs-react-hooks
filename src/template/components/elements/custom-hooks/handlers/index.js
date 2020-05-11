import handleChangeFunc from './onChangeHelper';
const handlers = {
  "onChange": handleChangeFunc,
  "onClick": (msg) => (ev) => console.log(msg)
}

export default handlers;