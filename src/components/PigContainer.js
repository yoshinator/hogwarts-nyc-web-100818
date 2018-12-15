import React, { Component } from 'react'
import CardList from './CardList'


class PigContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hogs: props.hogs
    }
  }

  toggleHog = (selectedHog) => {
    let hogs = this.state.hogs.map(hog => {
      if (hog.name === selectedHog.name) {
        selectedHog.selected = !selectedHog.selected
        return selectedHog
      } else {
        return hog
      }
    })
    this.setState({ hogs: hogs })
  }

  filterByName = () => {
    let sorted = this.state.hogs
    // function compare(a, b){
    //   const nameA = a.name.toUpperCase
    //   const nameB = b.name.toUpperCase
    //   let comparison = 0;
    //   if (nameA > nameB){
    //     comparison = 1
    //   }else if (nameA < nameB){
    //     comparison = -1
    //   }
    //   return comparison
    // }

    sorted.sort(function (a, b){
      debugger
    })

    // sorted = this.props.hogs.sort(compare)
    // this.setState({
    //   hogs: sorted
    // })
    // debugger
  }

  render(){
    console.log(this.state)
    return(
      <div className="ui container">
        <div className="ui segment">
        <button onClick={this.filterByName}>Filter by name</button>
        <button ></button>
        <button ></button>
        </div>
        <div className="ui eight wide column">
        <CardList hogs={this.state.hogs} toggleHog={this.toggleHog}/>
        </div>
      </div>


    );
  }
}

export default PigContainer
