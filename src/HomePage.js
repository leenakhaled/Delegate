import React, { Component } from 'react';

import MainSection from './components/MainSection/mainSection.jsx'
import Footer from './components/footer/footer'


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    }
  }
  componentDidMount() {

    const { items } = this.state
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log('user data', data)
        data.map((val, index) => {
          const obj = {
            user: val,
            isFav: false
          }
          items.push(obj)
        })

        this.setState({ items, isLoading: false })
        console.log('user obj', this.state.items)

      });



  }


  render() {
    return (
 
      <div>
        <MainSection userItem={this.state.items} />
        <Footer />   
</div>

  );
  }
}

export default HomePage;
