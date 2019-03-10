import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom"
//BrowserRouter is a router component
//Switch prevents Error page on every page (like "exact")
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return(
      <BrowserRouter basename="/react/main" >
        <div>
          <Header />
          <Navigation />
          <Switch>
            {/* create a path for whichever component | exact to only render Home once */}
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
        </div> 
      </BrowserRouter>
    )
  }
}

export default App