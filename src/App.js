import React from 'react';
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Page from './Components/Page';
import './App.css';

const App = () => {
  let score = '0'
  return (
      <div className="app_wraper">
          <Nav />
          <Score score={score} />
          <Page />
      </div>
  )
}

export default App;
