import React, { Component } from 'react';
import Footer from '../components/footer/footer'
import MainSection from '../components/MainSection/mainSection.js'

class Favourites extends Component {
  render() {
    return (
      <div>
          <MainSection fromFavPage />
          <Footer />
      
      </div>

    );
  }

}

export default Favourites;
