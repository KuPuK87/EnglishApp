import React, {useState, createContext} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Score from './Components/Score';
import Library from './Components/Library';
import Training from './Components/Training';
import Learn from './Components/Learn';
import StartPage from './Components/StartPage';
import Game from './Components/Games/Game';
import './App.css';
import {Context} from './context'

const App = () => {
  const checkLevel = () => {
    return Math.floor((0.5+Math.sqrt(1+8*(score)/(5)) / 2)) - 1
  }
  const [score, setScore] = useState(+localStorage.getItem('score') || 0)
  const [level, setLevel] = useState(checkLevel())

  const CheckLevel = () => {
        setLevel(checkLevel())
  }

  // const isTrue = (window.location.href= '/')

    return (
     <BrowserRouter>
     <Context.Provider value ={{setScore, score}}>
        <div className="app_wraper">
          <Score score={score} />
            <Nav level={level}/>
            <Route path='/library' component={Library} />
            <Route path='/training' component={Training} />
            <Route path='/learn' >
            <Learn 
                  CheckLevel={CheckLevel}
                  setScore={setScore}
                  score={score}
            />
            </Route>
            {/* <StartPage  path='/' /> */}
            <Route path='/training/check-mode'>
              <Game CheckLevel={CheckLevel}
                    />
            </Route>
            <Route path='/training/write-mode'>
              <Game CheckLevel={CheckLevel}
                    />
            </Route>
           
        </div>
        </Context.Provider>
      </BrowserRouter>
  )
}

export default App;
