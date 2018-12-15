import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer'

// const hogsArray = hogs.map(hog => selected = false)

class App extends Component {
  render() {
    let hogsArray = [...hogs].map(hog => {
      return {
        ...hog,
        selected: false
      }
    })
    // console.log(hogsArray);
    return (
      <div className="App">
          < Nav />
          < PigContainer hogs={hogsArray}/>
      </div>
    )
  }
}

export default App;
