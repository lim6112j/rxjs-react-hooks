import React from 'react';
import {Input, TextArea} from './elements';
import '../../css/style.css'
export const components = {
  A: <Input />,
  B: <TextArea />,
  C: <div className="card"><select><option>option1</option><option>option2</option><option>option3</option></select></div>,
  D: <div className="card"><button className="btn"> component - button </button></div>
}