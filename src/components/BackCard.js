import React from 'react'

const BackCard = ({ hog, toggleHog }) => {

  const handleClick = (event) => {
    // console.log(this.props);
    toggleHog(hog)
  }

    return (
      <div className="card" onClick={(event)=>handleClick(event)}>
        <h3>{hog.name}</h3>
        <p>Specialty: {hog.specialty}</p>
        <p>Greased: {(hog.greased) ? "Yes" : "No"}</p>
        <p>Weight: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>Highest Medal: {hog['highest medal achieved']}</p>
      </div>
    )
  }


export default BackCard
