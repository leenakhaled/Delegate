import React, { Component } from 'react';
import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import Fovourites from "./Favourites";
import reducers from "./reducers/reducers";
import {  createStore } from "redux";
import { Provider } from "react-redux";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    }
  }
  componentDidMount() {
  }

  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>

      <Router>
        <div>
          <div className="MainScreen">
       
            <Header />
              <Route exact path="/" component={HomePage} />
            <Route path="/fav" component={Fovourites} />
          </div>
        </div>
      </Router>
</Provider>
    );
  }

  //}
}

export default App;
