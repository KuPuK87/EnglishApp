import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Library from './Components/Library';
import Training from './Components/Training';
import Learn from './Components/Learn';
import Game from './Components/Games/Game';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0)
  return (
     <BrowserRouter>
        <div className="app_wraper">
          <Score score={score} />
            <Nav />
            <Route path='/library' component={Library} />
            <Route path='/training' component={Training} />
            <Route path='/learn' component={Learn} />
            <Route path='/training/check-mode'>
              <Game setScore={setScore}/>
                    score={score}
            </Route>
            <Route path='/training/write-mode'>
              <Game setScore={setScore}/>
                    score={score}
            </Route>
        </div>
      </BrowserRouter>
  )
}

export default App;
