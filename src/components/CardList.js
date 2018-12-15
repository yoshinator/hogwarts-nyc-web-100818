import React, { Component } from 'react'
import FrontCard from './FrontCard'
import BackCard from './BackCard'


class CardList extends Component {

  renderHogs = (hogs) =>{
    return hogs.map(hog => {
      if (hog.selected){
        return <BackCard hog={hog} toggleHog={this.props.toggleHog}/>
      }else if (!hog.selected){
        return <FrontCard hog={hog} toggleHog={this.props.toggleHog} />
      }
    })
  }

  render (){
    console.log(this.props);
    return(
      <div className="ui grid container">
        {this.renderHogs(this.props.hogs)}
      </div>
    )

  }
}

export default CardList
