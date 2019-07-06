import React, { Component } from 'react';
import Footer from './components/footer/footer'
import { BrowserRouter as Router } from 'react-router-dom'

class Favourites extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    }
  }
  
  render() {
 
    return (
      <Router>
        <div>
          <div className="MainScreen">
            <Footer />
          </div>
        </div>
        </Router>
      
      );
    }

}

export default Favourites;
