import React, { useState, useEffect } from 'react';
import { of, interval } from 'rxjs'
import { map } from 'rxjs/operators'
import TFactory from './TFactory'
import TFactory2 from './TFactory2'
const templateData = {
  name: "workshop1",
  items: [
    {
      title: "Card 1",
      details: {
        // ...more info
      },
      type: "D"
    },
    {
      title: "Card 2",
      details: {
        // ...more info
      },
      type: "B"
    },
    {
      title: "Card 3",
      details: {
        // ...more info
      },
      type: "C"
    },
    {
      title: "Card 4",
      details: {
        // ...more info
      },
      type: "A"
    }
  ]
}

const templateData$ = interval(1000).pipe(map(i => templateData.items.slice(0, i + 1)))
function App() {

  return (
    <div className="App">
      <h1>RxJS with React</h1>
      <TFactory />
      <hr/>
      <TFactory2 templateData={templateData$}/>
    </div>
  );
}

export default App;
