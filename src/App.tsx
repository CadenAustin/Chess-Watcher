import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTheme, ErrorPage } from '@itwin/itwinui-react';

import './App.css'
import Header from "./components/general-components/Header"
import LiveGame from "./components/controller-components/LiveGame"
import UserInfo from "./components/controller-components/UserInfo"
import { ColorContextProvider } from "./context/ColorContext"

function App(): ReactElement {
  
  useTheme("dark");
  return (
    <Router>
      <main>
        <ColorContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={LiveGame} />
            <Route path="/user/:name" component={UserInfo} />
            <ErrorPage errorType="404" />
          </Switch>
        </ColorContextProvider>
      </main>
    </Router>
  )
}

export default App
