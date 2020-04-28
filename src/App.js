import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './pages/main'
function App() {

  return (
    <Router>
    <div className="App">
      <Main />
    </div>
    </Router>

  );
}

export default App;
