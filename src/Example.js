import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom"
//BrowserRouter is a router component


//stateless functional component
const NewRoute = () => {
  return(
    <div>
      <p>New Route</p>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/new" component={NewRoute} />
      </BrowserRouter>
      
    );
  }
}

export default App;


//this is the basic route without external components
