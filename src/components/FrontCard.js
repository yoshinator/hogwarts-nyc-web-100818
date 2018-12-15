import React, { Component } from 'react';

const FrontCard = ({ hog , toggleHog}) => {

  const  handleClick = (event) => {
    toggleHog(hog)
  }


    return(
      <div className="card" onClick={(event)=>handleClick(event)}>
        <img
          src={require(`../hog-imgs/${hog.name.toLowerCase().split(' ').join('_')+'.jpg'}`)}  alt={hog.name} />
        <p>{hog.name}</p>
      </div>
    )

}

export default FrontCard
